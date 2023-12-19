/* eslint-disable no-use-before-define, class-methods-use-this, max-statements, no-console, require-await */

import path from "path";
import express from "express";
import http from "http";
import cors from "cors";
import { readFileSync } from "fs";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { DatabaseModule } from "./database";
import { PokemonModule } from "./resources/pokemon/pokemon.module";
import { TypeModule } from "./resources/types/type.module";
import { GenerationModule } from "./resources/generations/generation.module";
import { AbilityModule } from "./resources/abilities/ability.module";

export interface MyContext {}
const port = 3000;

class App {
  private static instance: App;
  private readonly app;
  private readonly httpServer;

  private constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.init();
  }

  public static getInstance(): App {
    if (!App.instance) {
      this.instance = new App();
    }
    return App.instance;
  }

  private async init() {
    const databaseModule = new DatabaseModule();
    const pokemonModule = new PokemonModule(databaseModule.service);
    const typeModule = new TypeModule(databaseModule.service);
    const generationModule = new GenerationModule(databaseModule.service);
    const abilityModule = new AbilityModule(databaseModule.service);

    await databaseModule.service.init();

    const typeDefs = readFileSync("./schema.graphql", {
      encoding: "utf-8",
    });
    const resolvers = {
      Query: {
        ...typeModule.resolver.query,
        ...generationModule.resolver.query,
        ...abilityModule.resolver.query,
        ...pokemonModule.resolver.query,
      },
      Mutation: {
        ...typeModule.resolver.mutation,
        ...generationModule.resolver.mutation,
        ...abilityModule.resolver.mutation,
        ...pokemonModule.resolver.mutation,
      },
    };
    const plugins = [
      ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
    ];
    const server = new ApolloServer<MyContext>({
      typeDefs,
      resolvers,
      plugins,
    });
    await server.start();
    this.app.use(
      "/graphql",
      cors<cors.CorsRequest>(),
      express.json(),
      expressMiddleware(server),
    );
    this.app.use(express.static(path.resolve(__dirname, "public")));
  }

  public async run() {
    await new Promise<void>((resolve) => {
      this.httpServer.listen({ port }, resolve);
    });
    console.log(`🚀 My-Poke-API GraphQL server at http://localhost:${port}/`);
  }
}

export default App;
