import { DatabaseService } from "../../database";
import { TypeController } from "./type.controller";
import { TypeService } from "./type.service";

export class TypeModule {
  private readonly typeController: TypeController;
  private readonly typeService: TypeService;

  public constructor(databaseService: DatabaseService) {
    this.typeService = new TypeService(databaseService);
    this.typeController = new TypeController(this.typeService);
  }

  public get controller() {
    return this.typeController;
  }

  public get service() {
    return this.typeService;
  }
}
