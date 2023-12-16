/* eslint-disable max-statements */
import { DatabaseService } from "../../database";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { Repository } from "typeorm";
import { Pokemon } from "./entities/pokemon.entity";
import { Type } from "../types/entities/type.entity";
import { Generation } from "../generations/entities/generation.entity";

export class PokemonService {
  private readonly databaseService: DatabaseService;
  private readonly pokemonRepository: Repository<Pokemon>;
  private readonly typeRepository: Repository<Type>;
  private readonly generationRepository: Repository<Generation>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.pokemonRepository =
      this.databaseService.dataSource.getRepository(Pokemon);
    this.typeRepository = this.databaseService.dataSource.getRepository(Type);
    this.generationRepository =
      this.databaseService.dataSource.getRepository(Generation);
  }

  public async create(createPokemonDto: CreatePokemonDto) {
    const newPokemon: Pokemon = await this.createInstance(createPokemonDto);
    return await this.pokemonRepository.save(newPokemon);
  }

  public async findAll() {
    return await this.pokemonRepository.find({
      relations: {
        types: true,
        generation: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.pokemonRepository.findOne({
      where: { id },
      relations: {
        types: true,
        generation: true,
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
    const generation = await this.generationRepository.findOneBy({
      id: dto.generationId,
    });
    if (!generation) {
      throw new Error(`Generation ${dto.generationId} is not found`);
    }
    pokemon.generation = generation;
    const types = await this.typeRepository.find({
      where: dto.typeIds.map((typeId) => ({ id: typeId })),
    });
    if (types.length === 0) {
      throw new Error(`Uncorrect types ${dto.typeIds}`);
    }
    pokemon.types = types;
    return pokemon;
  }
}
