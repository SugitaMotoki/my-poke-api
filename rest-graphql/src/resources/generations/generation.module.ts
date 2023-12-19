import { DatabaseService } from "../../database";
import { GenerationController } from "./generation.controller";
import { GenerationResolver } from "./generation.resolver";
import { GenerationService } from "./generation.service";

export class GenerationModule {
  private readonly generationController: GenerationController;
  private readonly generationResolver: GenerationResolver;
  private readonly generationService: GenerationService;

  public constructor(databaseService: DatabaseService) {
    this.generationService = new GenerationService(databaseService);
    this.generationController = new GenerationController(
      this.generationService,
    );
    this.generationResolver = new GenerationResolver(this.generationService);
  }

  public get controller() {
    return this.generationController;
  }

  public get resolver() {
    return this.generationResolver;
  }

  public get service() {
    return this.generationService;
  }
}
