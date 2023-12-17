import "reflect-metadata";
import { DataSource } from "typeorm";
import { DatabaseService } from "./database.service";
import { Pokemon } from "../resources/pokemon/entities/pokemon.entity";
import { Type } from "../resources/types/entities/type.entity";
import { Generation } from "../resources/generations/entities/generation.entity";
import { Ability } from "../resources/abilities/entities/ability.entity";
import { PokemonToAbility } from "../resources/pokemon/entities/pokemon-to-ability.entity";

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
        entities: [Pokemon, Type, Generation, Ability, PokemonToAbility],
        synchronize: true,
        logging: false,
      }),
    );
  }

  public get service() {
    return this.databaseService;
  }
}
