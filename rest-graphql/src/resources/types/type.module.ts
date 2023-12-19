import { DatabaseService } from "../../database";
import { TypeController } from "./type.controller";
import { TypeResolver } from "./type.resolver";
import { TypeService } from "./type.service";

export class TypeModule {
  private readonly typeController: TypeController;
  private readonly typeResolver: TypeResolver;
  private readonly typeService: TypeService;

  public constructor(databaseService: DatabaseService) {
    this.typeService = new TypeService(databaseService);
    this.typeController = new TypeController(this.typeService);
    this.typeResolver = new TypeResolver(this.typeService);
  }

  public get controller() {
    return this.typeController;
  }

  public get resolver() {
    return this.typeResolver;
  }

  public get service() {
    return this.typeService;
  }
}
