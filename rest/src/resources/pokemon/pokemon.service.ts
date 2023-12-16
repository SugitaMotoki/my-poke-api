import { DatabaseService } from "../../database";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { Pokemon } from "./pokemon.entity";
import { Type } from "../types/type.entity";
import { Repository } from "typeorm";

export class PokemonService {
  private readonly databaseService: DatabaseService;
  private readonly pokemonRepository: Repository<Pokemon>;
  private readonly typeRepository: Repository<Type>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.pokemonRepository =
      this.databaseService.dataSource.getRepository(Pokemon);
    this.typeRepository = this.databaseService.dataSource.getRepository(Type);
  }

  public async create(createPokemonDto: CreatePokemonDto) {
    const newPokemon: Pokemon = PokemonService.createInstance(createPokemonDto);
    if (createPokemonDto.typeIds.length !== 0) {
      const types = await this.typeRepository.find({
        where: createPokemonDto.typeIds.map((typeId) => ({ id: typeId })),
      });
      newPokemon.types = types;
    }
    return await this.pokemonRepository.save(newPokemon);
  }

  public async findAll() {
    return await this.pokemonRepository.find({
      relations: {
        types: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.pokemonRepository.findOne({
      where: { id },
      relations: {
        types: true,
      },
    });
  }

  private static createInstance(dto: CreatePokemonDto) {
    const pokemon = new Pokemon();
    pokemon.name = dto.name;
    pokemon.pokedex = dto.pokedex;
    pokemon.genus = dto.genus;
    pokemon.height = dto.height;
    pokemon.weight = dto.weight;
    return pokemon;
  }
}
