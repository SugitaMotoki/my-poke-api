import * as gql from "../../__generated__/resolvers-types";
import { AbilityService } from "./ability.service";

export class AbilityResolver {
  private readonly abilityService: AbilityService;
  private readonly abilityQuery;
  private readonly abilityMutation;

  public constructor(abilityService: AbilityService) {
    this.abilityService = abilityService;
    this.abilityQuery = {
      abilities: async () => await this.abilityService.findAll(),
      ability: async (
        _: gql.ResolversParentTypes["Query"],
        args: gql.QueryTypeArgs,
      ) => await this.abilityService.findOne(args.id),
    };
    this.abilityMutation = {
      createAbility: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationCreateAbilityArgs,
      ) => await this.abilityService.create(args),
      updateAbility: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationUpdateAbilityArgs,
      ) => {
        await this.abilityService.update(args.id, {
          name: args.name,
          flavorText: args.flavorText,
          description: args.description,
        });
        return "completed";
      },
      deleteAbility: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationDeleteAbilityArgs,
      ) => {
        await this.abilityService.remove(args.id);
        return "completed";
      },
    };
  }

  public get query() {
    return this.abilityQuery;
  }

  public get mutation() {
    return this.abilityMutation;
  }
}
