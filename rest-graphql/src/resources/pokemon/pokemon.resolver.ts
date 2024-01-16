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
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationCreatePokemonArgs,
      ) => await this.pokemonService.create(args),
      deletePokemon: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationDeletePokemonArgs,
      ) => {
        await this.pokemonService.remove(args.id);
        return "completed";
      },
    };
  }

  public get query() {
    return this.pokemonQuery;
  }

  public get mutation() {
    return this.pokemonMutation;
  }
}
