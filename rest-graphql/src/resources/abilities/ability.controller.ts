import PromiseRouter from "express-promise-router";
import { AbilityService } from "./ability.service";
import { CreateAbilityDto } from "./dto/create-ability.dto";
import { UpdateAbilityDto } from "./dto/update-ability.dto";

export class AbilityController {
  public readonly router;
  private readonly abilityService: AbilityService;

  public constructor(abilityService: AbilityService) {
    this.router = PromiseRouter();
    this.abilityService = abilityService;
    this.defineRoute();
  }

  private defineRoute() {
    this.router.get("/", async (_req, res) => {
      const abilities = await this.abilityService.findAll();
      res.json(abilities);
    });

    this.router.get("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const ability = await this.abilityService.findOne(id);
      if (!ability) {
        res.status(404);
      }
      res.json(ability);
    });

    this.router.post("/", async (req, res) => {
      const createAbilityDto: CreateAbilityDto = req.body;
      const ability = await this.abilityService.create(createAbilityDto);
      res.status(201).json(ability);
    });

    this.router.put("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const updateAbilityDto: UpdateAbilityDto = req.body;
      const updateResult = await this.abilityService.update(
        id,
        updateAbilityDto,
      );
      res.status(200).json(updateResult);
    });

    this.router.delete("/:id", async (req, res) => {
      const id = Number(req.params.id);
      await this.abilityService.remove(id);
      res.status(200).json({
        message: "completed",
      });
    });
  }
}
