/* eslint-disable no-console */
import type { DataSource } from "typeorm";

export class DatabaseService {
  public readonly dataSource: DataSource;

  public constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async init() {
    try {
      await this.dataSource.initialize();
      console.log("Successfully connected to database.");
    } catch (error) {
      console.error("Failed to connect to database.");
      console.error(error);
    }
  }
}
