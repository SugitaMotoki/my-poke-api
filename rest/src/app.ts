/* eslint-disable no-use-before-define, class-methods-use-this */

import path from "path";
import express from "express";

import { appDataSource } from "./data-source";

const app = express();
const port = 3000;

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

  private init = async () => {
    app.use(express.static(path.resolve(__dirname, "public")));
    await appDataSource.initialize();
  };

  public run = () => {
    app.listen(port, () => {
      console.log(`My-Poke-API REST Server! http://localhost:${port}`);
    });
  };
}

export default App;
