import "reflect-metadata";
import { DataSource } from "typeorm";
import { DatabaseService } from "./database.service";
import { Pokemon } from "../resources/pokemon/pokemon.entity";
import { Type } from "../resources/types/type.entity";
import { Generation } from "../resources/generations/generation.entity";
import { Ability } from "../resources/abilities/ability.entity";

export class DatabaseModule {
  private readonly databaseService: DatabaseService;

  public constructor() {
    this.databaseService = new DatabaseService(
      new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "poke",
        password: "poke",
        database: "poke",
        entities: [Pokemon, Type, Generation, Ability],
        synchronize: true,
        logging: false,
      }),
    );
  }

  public get service() {
    return this.databaseService;
  }
}
