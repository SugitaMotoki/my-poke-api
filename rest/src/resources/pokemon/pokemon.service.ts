import { DatabaseService } from "../../database";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { Pokemon } from "./pokemon.entity";
import { Repository } from "typeorm";

export class PokemonService {
  private readonly databaseService: DatabaseService;
  private readonly pokemonRepository: Repository<Pokemon>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.pokemonRepository =
      this.databaseService.dataSource.getRepository(Pokemon);
  }

  public async create(createPokemonDto: CreatePokemonDto) {
    const newPokemon: Pokemon = createPokemonDto;
    return await this.pokemonRepository.save(newPokemon);
  }

  public async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find({
      relations: {},
    });
  }

  public async findOne(id: number) {
    return await this.pokemonRepository.findOne({
      where: { id },
      relations: {},
    });
  }
}
