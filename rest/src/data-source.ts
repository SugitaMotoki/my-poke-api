import "reflect-metadata";
import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "poke",
  password: "poke",
  database: "poke",
  entities: [],
  synchronize: true,
  logging: false,
});
