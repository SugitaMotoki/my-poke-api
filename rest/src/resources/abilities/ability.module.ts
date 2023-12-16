import { DatabaseService } from "../../database";
import { AbilityController } from "./ability.controller";
import { AbilityService } from "./ability.service";

export class AbilityModule {
  private readonly abilityController: AbilityController;
  private readonly abilityService: AbilityService;

  public constructor(databaseService: DatabaseService) {
    this.abilityService = new AbilityService(databaseService);
    this.abilityController = new AbilityController(this.abilityService);
  }

  public get controller() {
    return this.abilityController;
  }

  public get service() {
    return this.abilityService;
  }
}
