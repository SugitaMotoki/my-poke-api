/* eslint-disable max-statements */
import { DatabaseService } from "../../database";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { Repository } from "typeorm";
import { Pokemon } from "./entities/pokemon.entity";
import { Type } from "../types/entities/type.entity";
import { Generation } from "../generations/entities/generation.entity";
import { Ability } from "../abilities/entities/ability.entity";
import { PokemonToAbility } from "./entities/pokemon-to-ability.entity";

export class PokemonService {
  private readonly databaseService: DatabaseService;
  private readonly pokemonRepository: Repository<Pokemon>;
  private readonly typeRepository: Repository<Type>;
  private readonly generationRepository: Repository<Generation>;
  private readonly abilityRepository: Repository<Ability>;
  private readonly pokemonToAbilityRepository: Repository<PokemonToAbility>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.pokemonRepository =
      this.databaseService.dataSource.getRepository(Pokemon);
    this.typeRepository = this.databaseService.dataSource.getRepository(Type);
    this.generationRepository =
      this.databaseService.dataSource.getRepository(Generation);
    this.abilityRepository =
      this.databaseService.dataSource.getRepository(Ability);
    this.pokemonToAbilityRepository =
      this.databaseService.dataSource.getRepository(PokemonToAbility);
  }

  public async create(createPokemonDto: CreatePokemonDto) {
    const newPokemon: Pokemon = await this.createInstance(createPokemonDto);
    const createdPokemon = await this.pokemonRepository.save(newPokemon);
    const pokemonToAbilities = createPokemonDto.abilities.map(
      async (abilityObject) => {
        const pokemonToAbility = new PokemonToAbility();
        const ability = await this.findAbilityById(abilityObject.id);
        pokemonToAbility.pokemon = createdPokemon;
        pokemonToAbility.ability = ability;
        pokemonToAbility.isHidden = abilityObject.isHidden;
        return pokemonToAbility;
      },
    );
    for await (const pokemonToAbility of pokemonToAbilities) {
      await this.pokemonToAbilityRepository.save(pokemonToAbility);
    }
    return createdPokemon;
  }

  public async findAll() {
    return await this.pokemonRepository.find({
      relations: {
        types: true,
        generation: true,
        pokemonToAbilities: {
          ability: true,
        },
      },
    });
  }

  public async findOne(id: number) {
    return await this.pokemonRepository.findOne({
      where: { id },
      relations: {
        types: true,
        generation: true,
        pokemonToAbilities: {
          ability: true,
        },
      },
    });
  }

  private async createInstance(dto: CreatePokemonDto) {
    const pokemon = new Pokemon();
    pokemon.name = dto.name;
    pokemon.pokedex = dto.pokedex;
    pokemon.genus = dto.genus;
    pokemon.height = dto.height;
    pokemon.weight = dto.weight;
    pokemon.generation = await this.findGenerationById(dto.generationId);
    pokemon.types = await this.findTypesByIds(dto.typeIds);
    return pokemon;
  }

  private async findGenerationById(id: number) {
    const generation = await this.generationRepository.findOneBy({ id });
    if (!generation) {
      throw new Error(`Generation ${id} is not found`);
    }
    return generation;
  }

  private async findTypesByIds(ids: number[]) {
    const types = await this.typeRepository.find({
      where: ids.map((id) => ({ id })),
    });
    if (types.length === 0) {
      throw new Error(`Uncorrect types ${ids}`);
    }
    return types;
  }

  private async findAbilityById(id: number) {
    const ability = await this.abilityRepository.findOneBy({ id });
    if (!ability) {
      throw new Error(`Generation ${id} is not found`);
    }
    return ability;
  }
}
