import { DatabaseService } from "../../database";
import { GenerationResolver } from "./generation.resolver";
import { GenerationService } from "./generation.service";

export class GenerationModule {
  private readonly generationResolver: GenerationResolver;
  private readonly generationService: GenerationService;

  public constructor(databaseService: DatabaseService) {
    this.generationService = new GenerationService(databaseService);
    this.generationResolver = new GenerationResolver(this.generationService);
  }

  public get resolver() {
    return this.generationResolver;
  }

  public get service() {
    return this.generationService;
  }
}
