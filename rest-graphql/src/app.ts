/* eslint-disable no-use-before-define, max-statements, no-console */

import path from "path";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { readFileSync } from "fs";
import http from "http";
import cors from "cors";
import { DatabaseModule } from "./database";
import {
  PokemonModule,
  TypeModule,
  GenerationModule,
  AbilityModule,
} from "./resources";

export interface MyContext {}

const port = 3000;

class App {
  private static instance: App;
  private readonly app;
  private readonly httpServer;
  private readonly databaseModule;
  private readonly modules;

  private constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.databaseModule = new DatabaseModule();
    this.modules = [
      {
        url: "/pokemon",
        instance: new PokemonModule(this.databaseModule.service),
      },
      { url: "/types", instance: new TypeModule(this.databaseModule.service) },
      {
        url: "/generations",
        instance: new GenerationModule(this.databaseModule.service),
      },
      {
        url: "/abilities",
        instance: new AbilityModule(this.databaseModule.service),
      },
    ];
    this.init();
  }

  public static getInstance(): App {
    if (!App.instance) {
      this.instance = new App();
    }
    return App.instance;
  }

  private async init() {
    await this.databaseModule.service.init();

    const typeDefs = readFileSync("./schema.graphql", {
      encoding: "utf-8",
    });
    const resolvers = this.mergeResolvers();
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

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(__dirname, "public")));
    this.app.use(express.json());

    for (const module of this.modules) {
      this.app.use(module.url, module.instance.controller.router);
    }
  }

  private mergeResolvers() {
    const query = Object.assign(
      {},
      ...this.modules.map((module) => module.instance.resolver.query),
    );
    const mutation = Object.assign(
      {},
      ...this.modules.map((module) => module.instance.resolver.mutation),
    );
    return {
      Query: {
        ...query,
      },
      Mutation: {
        ...mutation,
      },
    };
  }

  public async run() {
    await new Promise<void>((resolve) => {
      this.httpServer.listen({ port }, resolve);
    });
    console.log(`🚀 My-Poke-API GraphQL server at http://localhost:${port}/`);
  }
}

export default App;
