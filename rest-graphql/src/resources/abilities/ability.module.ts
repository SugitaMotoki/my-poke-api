import { DatabaseService } from "../../database";
import { AbilityResolver } from "./ability.resolver";
import { AbilityService } from "./ability.service";

export class AbilityModule {
  private readonly abilityResolver: AbilityResolver;
  private readonly abilityService: AbilityService;

  public constructor(databaseService: DatabaseService) {
    this.abilityService = new AbilityService(databaseService);
    this.abilityResolver = new AbilityResolver(this.abilityService);
  }

  public get resolver() {
    return this.abilityResolver;
  }

  public get service() {
    return this.abilityService;
  }
}
