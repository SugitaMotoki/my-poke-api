import { DatabaseService } from "../../database";
import { TypeService } from "./type.service";
import { TypeResolver } from "./type.resolver";

export class TypeModule {
  private readonly typeResolver: TypeResolver;
  private readonly typeService: TypeService;

  public constructor(databaseService: DatabaseService) {
    this.typeService = new TypeService(databaseService);
    this.typeResolver = new TypeResolver(this.typeService);
  }

  public get service() {
    return this.typeService;
  }

  public get resolver() {
    return this.typeResolver;
  }
}
