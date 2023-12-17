import { DatabaseService } from "../../database";
import { GenerationController } from "./generation.controller";
import { GenerationService } from "./generation.service";

export class GenerationModule {
  private readonly generationController: GenerationController;
  private readonly generationService: GenerationService;

  public constructor(databaseService: DatabaseService) {
    this.generationService = new GenerationService(databaseService);
    this.generationController = new GenerationController(
      this.generationService,
    );
  }

  public get controller() {
    return this.generationController;
  }

  public get service() {
    return this.generationService;
  }
}
