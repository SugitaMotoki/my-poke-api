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
        _parent: gql.ResolversParentTypes,
        args: gql.MutationCreateTypeArgs,
      ) => await typeService.create(args),
    };
  }

  public get query() {
    return this.typeQuery;
  }

  public get mutation() {
    return this.typeMutation;
  }
}
