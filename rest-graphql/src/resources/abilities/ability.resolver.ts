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
        _parent: gql.ResolversParentTypes,
        args: gql.MutationCreateAbilityArgs,
      ) => await this.abilityService.create(args),
    };
  }

  public get query() {
    return this.abilityQuery;
  }

  public get mutation() {
    return this.abilityMutation;
  }
}
