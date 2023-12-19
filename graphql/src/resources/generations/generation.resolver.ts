import * as gql from "../../__generated__/resolvers-types";
import { GenerationService } from "./generation.service";

export class GenerationResolver {
  private readonly generationService: GenerationService;
  private readonly generationQuery;
  private readonly generationMutation;

  public constructor(generationService: GenerationService) {
    this.generationService = generationService;
    this.generationQuery = {
      generations: async () => await this.generationService.findAll(),
      generation: async (
        _: gql.ResolversParentTypes["Query"],
        args: gql.QueryGenerationArgs,
      ) => await this.generationService.findOne(args.id),
    };
    this.generationMutation = {
      createGeneration: async (
        _parent: gql.ResolversParentTypes,
        args: gql.MutationCreateGenerationArgs,
      ) => await this.generationService.create(args),
    };
  }

  public get query() {
    return this.generationQuery;
  }

  public get mutation() {
    return this.generationMutation;
  }
}
