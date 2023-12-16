import { DatabaseService } from "../../database";
import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./pokemon.service";

export class PokemonModule {
  private readonly pokemonController: PokemonController;
  private readonly pokemonService: PokemonService;

  public constructor(databaseService: DatabaseService) {
    this.pokemonService = new PokemonService(databaseService);
    this.pokemonController = new PokemonController(this.pokemonService);
  }

  public get controller() {
    return this.pokemonController;
  }

  public get service() {
    return this.pokemonService;
  }
}
