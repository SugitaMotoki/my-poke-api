import * as gql from "../../__generated__/resolvers-types";
import { TypeService } from "./type.service";

export class TypeResolver {
  private readonly typeService: TypeService;
  private readonly typeQuery;
  private readonly typeMutation;

  public constructor(typeService: TypeService) {
    this.typeService = typeService;
    this.typeQuery = {
      types: async () => await this.typeService.findAll(),
      type: async (
        _: gql.ResolversParentTypes["Query"],
        args: gql.QueryTypeArgs,
      ) => await this.typeService.findOne(args.id),
    };
    this.typeMutation = {
      createType: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationCreateTypeArgs,
      ) => await this.typeService.create(args),
      updateType: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationUpdateTypeArgs,
      ) => {
        await this.typeService.update(args.id, { name: args.name });
        return "completed";
      },
      deleteType: async (
        _: gql.ResolversParentTypes["Mutation"],
        args: gql.MutationDeleteTypeArgs,
      ) => {
        await this.typeService.remove(args.id);
        return "completed";
      },
    };
  }

  public get query() {
    return this.typeQuery;
  }

  public get mutation() {
    return this.typeMutation;
  }
}
