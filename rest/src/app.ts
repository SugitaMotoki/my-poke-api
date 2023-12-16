/* eslint-disable no-use-before-define, class-methods-use-this, max-statements, no-console */

import path from "path";
import express from "express";
import PromiseRouter from "express-promise-router";

import { DatabaseModule } from "./database";
import { PokemonModule } from "./resources/pokemon/pokemon.module";
import { TypeModule } from "./resources/types/type.module";
import { GenerationModule } from "./resources/generations/generation.module";
import { AbilityModule } from "./resources/abilities/ability.module";

const port = 3000;
const app = express();
const router = PromiseRouter();

class App {
  private static instance: App;

  private constructor() {
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

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.resolve(__dirname, "public")));
    app.use(express.json());

    app.use(router);
    app.use("/pokemon", pokemonModule.controller.router);
    app.use("/types", typeModule.controller.router);
    app.use("/generations", generationModule.controller.router);
    app.use("/abilities", abilityModule.controller.router);
  }

  public run() {
    app.listen(port, () => {
      console.log(`My-Poke-API REST Server! http://localhost:${port}`);
    });
  }
}

export default App;
