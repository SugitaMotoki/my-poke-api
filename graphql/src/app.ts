/* eslint-disable no-use-before-define, class-methods-use-this, max-statements, no-console */

import path from "path";
import express from "express";
import PromiseRouter from "express-promise-router";

const port = 3000;

class App {
  private static instance: App;
  private readonly app;
  private readonly router;

  private constructor() {
    this.app = express();
    this.router = PromiseRouter();
    this.init();
  }

  public static getInstance(): App {
    if (!App.instance) {
      this.instance = new App();
    }
    return App.instance;
  }

  private init() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(__dirname, "public")));
    this.app.use(express.json());
  }

  public run() {
    this.app.listen(port, () => {
      console.log(`My-Poke-API GraphQL Server! http://localhost:${port}`);
    });
  }
}

export default App;
