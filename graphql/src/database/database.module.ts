import "reflect-metadata";
import { DataSource } from "typeorm";
import { DatabaseService } from "./database.service";
import { Type } from "../resources/types/entities/type.entity";

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
        entities: [Type],
        synchronize: true,
        logging: false,
      }),
    );
  }

  public get service() {
    return this.databaseService;
  }
}
