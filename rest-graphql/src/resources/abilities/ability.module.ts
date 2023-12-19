import { DatabaseService } from "../../database";
import { AbilityController } from "./ability.controller";
import { AbilityResolver } from "./ability.resolver";
import { AbilityService } from "./ability.service";

export class AbilityModule {
  private readonly abilityController: AbilityController;
  private readonly abilityResolver: AbilityResolver;
  private readonly abilityService: AbilityService;

  public constructor(databaseService: DatabaseService) {
    this.abilityService = new AbilityService(databaseService);
    this.abilityController = new AbilityController(this.abilityService);
    this.abilityResolver = new AbilityResolver(this.abilityService);
  }

  public get controller() {
    return this.abilityController;
  }

  public get resolver() {
    return this.abilityResolver;
  }

  public get service() {
    return this.abilityService;
  }
}
