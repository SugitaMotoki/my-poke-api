import PromiseRouter from "express-promise-router";
import { GenerationService } from "./generation.service";
import { CreateGenerationDto } from "./dto/create-generation.dto";
import { UpdateGenerationDto } from "./dto/update-generation.dto";

export class GenerationController {
  public readonly router;
  private readonly generationService: GenerationService;

  public constructor(generationService: GenerationService) {
    this.router = PromiseRouter();
    this.generationService = generationService;
    this.defineRoute();
  }

  private defineRoute() {
    this.router.get("/", async (_req, res) => {
      const generations = await this.generationService.findAll();
      res.json(generations);
    });

    this.router.get("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const generation = await this.generationService.findOne(id);
      if (!generation) {
        res.status(404);
      }
      res.json(generation);
    });

    this.router.post("/", async (req, res) => {
      const createGenerationDto: CreateGenerationDto = req.body;
      const generation =
        await this.generationService.create(createGenerationDto);
      res.status(201).json(generation);
    });

    this.router.put("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const updateGenerationDto: UpdateGenerationDto = req.body;
      const updateResult = await this.generationService.update(
        id,
        updateGenerationDto,
      );
      res.status(200).json(updateResult);
    });

    this.router.delete("/:id", async (req, res) => {
      const id = Number(req.params.id);
      await this.generationService.remove(id);
      res.status(200).json({
        message: "completed",
      });
    });
  }
}
