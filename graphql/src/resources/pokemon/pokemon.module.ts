import { DatabaseService } from "../../database";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

export class PokemonModule {
  private readonly pokemonResolver: PokemonResolver;
  private readonly pokemonService: PokemonService;

  public constructor(databaseService: DatabaseService) {
    this.pokemonService = new PokemonService(databaseService);
    this.pokemonResolver = new PokemonResolver(this.pokemonService);
  }

  public get resolver() {
    return this.pokemonResolver;
  }

  public get service() {
    return this.pokemonService;
  }
}
