import * as gql from "../../__generated__/resolvers-types";
import { PokemonService } from "./pokemon.service";

export class PokemonResolver {
  private readonly pokemonService: PokemonService;
  private readonly pokemonQuery;
  private readonly pokemonMutation;

  public constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
    this.pokemonQuery = {
      pokemons: async () => await this.pokemonService.findAll(),
      pokemon: async (
        _: gql.ResolversParentTypes["Query"],
        args: gql.QueryPokemonArgs,
      ) => await this.pokemonService.findOne(args.id),
    };
    this.pokemonMutation = {
      createPokemon: async (
        _parent: gql.ResolversParentTypes,
        args: gql.MutationCreatePokemonArgs,
      ) => await this.pokemonService.create(args),
    };
  }

  public get query() {
    return this.pokemonQuery;
  }

  public get mutation() {
    return this.pokemonMutation;
  }
}
