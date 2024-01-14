import { GraphQLResolveInfo } from "graphql";
import { MyContext } from "../app";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Ability = {
  __typename?: "Ability";
  description: Scalars["String"]["output"];
  flavorText: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type CreateAbilityProps = {
  id: Scalars["Int"]["input"];
  isHidden: Scalars["Boolean"]["input"];
};

export type Generation = {
  __typename?: "Generation";
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createAbility: Ability;
  createGeneration: Generation;
  createPokemon: Pokemon;
  createType: Type;
  deleteAbility: Scalars["String"]["output"];
  deleteGeneration: Scalars["String"]["output"];
  deletePokemon: Scalars["String"]["output"];
  deleteType: Scalars["String"]["output"];
  updateAbility: Scalars["String"]["output"];
  updateGeneration: Scalars["String"]["output"];
  updateType: Scalars["String"]["output"];
};

export type MutationCreateAbilityArgs = {
  description: Scalars["String"]["input"];
  flavorText: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateGenerationArgs = {
  name: Scalars["String"]["input"];
};

export type MutationCreatePokemonArgs = {
  abilities: Array<CreateAbilityProps>;
  generationId: Scalars["Int"]["input"];
  genus: Scalars["String"]["input"];
  height: Scalars["Float"]["input"];
  imageUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  pokedex: Scalars["Int"]["input"];
  typeIds: Array<Scalars["Int"]["input"]>;
  weight: Scalars["Float"]["input"];
};

export type MutationCreateTypeArgs = {
  name: Scalars["String"]["input"];
};

export type MutationDeleteAbilityArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteGenerationArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeletePokemonArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteTypeArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUpdateAbilityArgs = {
  description: Scalars["String"]["input"];
  flavorText: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateGenerationArgs = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateTypeArgs = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type Pokemon = {
  __typename?: "Pokemon";
  abilities?: Maybe<Array<PokemonToAbility>>;
  generation: Generation;
  genus: Scalars["String"]["output"];
  height: Scalars["Float"]["output"];
  id: Scalars["Int"]["output"];
  imageUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  pokedex: Scalars["Int"]["output"];
  types: Array<Type>;
  weight: Scalars["Float"]["output"];
};

export type PokemonToAbility = {
  __typename?: "PokemonToAbility";
  ability: Ability;
  isHidden: Scalars["Boolean"]["output"];
};

export type Query = {
  __typename?: "Query";
  abilities: Array<Ability>;
  ability: Ability;
  generation: Generation;
  generations: Array<Generation>;
  pokemon: Pokemon;
  pokemons: Array<Pokemon>;
  type: Type;
  types: Array<Type>;
};

export type QueryAbilityArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryGenerationArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryPokemonArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryTypeArgs = {
  id: Scalars["Int"]["input"];
};

export type Type = {
  __typename?: "Type";
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Ability: ResolverTypeWrapper<Ability>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CreateAbilityProps: CreateAbilityProps;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Generation: ResolverTypeWrapper<Generation>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonToAbility: ResolverTypeWrapper<PokemonToAbility>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Type: ResolverTypeWrapper<Type>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ability: Ability;
  Boolean: Scalars["Boolean"]["output"];
  CreateAbilityProps: CreateAbilityProps;
  Float: Scalars["Float"]["output"];
  Generation: Generation;
  Int: Scalars["Int"]["output"];
  Mutation: {};
  Pokemon: Pokemon;
  PokemonToAbility: PokemonToAbility;
  Query: {};
  String: Scalars["String"]["output"];
  Type: Type;
}>;

export type AbilityResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Ability"] = ResolversParentTypes["Ability"],
> = ResolversObject<{
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  flavorText?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenerationResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Generation"] = ResolversParentTypes["Generation"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = ResolversObject<{
  createAbility?: Resolver<
    ResolversTypes["Ability"],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateAbilityArgs,
      "description" | "flavorText" | "name"
    >
  >;
  createGeneration?: Resolver<
    ResolversTypes["Generation"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateGenerationArgs, "name">
  >;
  createPokemon?: Resolver<
    ResolversTypes["Pokemon"],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreatePokemonArgs,
      | "abilities"
      | "generationId"
      | "genus"
      | "height"
      | "imageUrl"
      | "name"
      | "pokedex"
      | "typeIds"
      | "weight"
    >
  >;
  createType?: Resolver<
    ResolversTypes["Type"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTypeArgs, "name">
  >;
  deleteAbility?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAbilityArgs, "id">
  >;
  deleteGeneration?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteGenerationArgs, "id">
  >;
  deletePokemon?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePokemonArgs, "id">
  >;
  deleteType?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTypeArgs, "id">
  >;
  updateAbility?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateAbilityArgs,
      "description" | "flavorText" | "id" | "name"
    >
  >;
  updateGeneration?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateGenerationArgs, "id" | "name">
  >;
  updateType?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTypeArgs, "id" | "name">
  >;
}>;

export type PokemonResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Pokemon"] = ResolversParentTypes["Pokemon"],
> = ResolversObject<{
  abilities?: Resolver<
    Maybe<Array<ResolversTypes["PokemonToAbility"]>>,
    ParentType,
    ContextType
  >;
  generation?: Resolver<ResolversTypes["Generation"], ParentType, ContextType>;
  genus?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  height?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pokedex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes["Type"]>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonToAbilityResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["PokemonToAbility"] = ResolversParentTypes["PokemonToAbility"],
> = ResolversObject<{
  ability?: Resolver<ResolversTypes["Ability"], ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  abilities?: Resolver<
    Array<ResolversTypes["Ability"]>,
    ParentType,
    ContextType
  >;
  ability?: Resolver<
    ResolversTypes["Ability"],
    ParentType,
    ContextType,
    RequireFields<QueryAbilityArgs, "id">
  >;
  generation?: Resolver<
    ResolversTypes["Generation"],
    ParentType,
    ContextType,
    RequireFields<QueryGenerationArgs, "id">
  >;
  generations?: Resolver<
    Array<ResolversTypes["Generation"]>,
    ParentType,
    ContextType
  >;
  pokemon?: Resolver<
    ResolversTypes["Pokemon"],
    ParentType,
    ContextType,
    RequireFields<QueryPokemonArgs, "id">
  >;
  pokemons?: Resolver<
    Array<ResolversTypes["Pokemon"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    ResolversTypes["Type"],
    ParentType,
    ContextType,
    RequireFields<QueryTypeArgs, "id">
  >;
  types?: Resolver<Array<ResolversTypes["Type"]>, ParentType, ContextType>;
}>;

export type TypeResolvers<
  ContextType = MyContext,
  ParentType extends
    ResolversParentTypes["Type"] = ResolversParentTypes["Type"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Ability?: AbilityResolvers<ContextType>;
  Generation?: GenerationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonToAbility?: PokemonToAbilityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
}>;
