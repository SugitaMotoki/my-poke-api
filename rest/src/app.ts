/* eslint-disable no-use-before-define, class-methods-use-this */

import path from "path";
import express from "express";
import PromiseRouter from "express-promise-router";

import { DatabaseModule } from "./database";
import { TypeModule } from "./resources/types/type.module";
import { PokemonModule } from "./resources/pokemon/pokemon.module";

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
    const typeModule = new TypeModule(databaseModule.service);
    const pokemonModule = new PokemonModule(databaseModule.service);

    await databaseModule.service.init();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.resolve(__dirname, "public")));
    app.use(express.json());

    app.use(router);
    app.use("/types", typeModule.controller.router);
    app.use("/pokemon", pokemonModule.controller.router);
  }

  public run() {
    app.listen(port, () => {
      console.log(`My-Poke-API REST Server! http://localhost:${port}`);
    });
  }
}

export default App;
