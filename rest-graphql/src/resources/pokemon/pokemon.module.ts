import { DatabaseService } from "../../database";
import { PokemonController } from "./pokemon.controller";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

export class PokemonModule {
  private readonly pokemonController: PokemonController;
  private readonly pokemonResolver: PokemonResolver;
  private readonly pokemonService: PokemonService;

  public constructor(databaseService: DatabaseService) {
    this.pokemonService = new PokemonService(databaseService);
    this.pokemonController = new PokemonController(this.pokemonService);
    this.pokemonResolver = new PokemonResolver(this.pokemonService);
  }

  public get controller() {
    return this.pokemonController;
  }

  public get resolver() {
    return this.pokemonResolver;
  }

  public get service() {
    return this.pokemonService;
  }
}
