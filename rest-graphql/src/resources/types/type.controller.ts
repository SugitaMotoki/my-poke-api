import PromiseRouter from "express-promise-router";
import { TypeService } from "./type.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";

export class TypeController {
  public readonly router;
  private readonly typeService: TypeService;

  public constructor(typeServise: TypeService) {
    this.router = PromiseRouter();
    this.typeService = typeServise;
    this.defineRoute();
  }

  private defineRoute() {
    this.router.get("/", async (_req, res) => {
      const types = await this.typeService.findAll();
      res.json(types);
    });

    this.router.get("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const type = await this.typeService.findOne(id);
      if (!type) {
        res.status(404);
      }
      res.json(type);
    });

    this.router.post("/", async (req, res) => {
      const createTypeDto: CreateTypeDto = req.body;
      const type = await this.typeService.create(createTypeDto);
      res.status(201).json(type);
    });

    this.router.put("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const updateTypeDto: UpdateTypeDto = req.body;
      const updateResult = await this.typeService.update(id, updateTypeDto);
      res.status(200).json(updateResult);
    });

    this.router.delete("/:id", async (req, res) => {
      const id = Number(req.params.id);
      await this.typeService.remove(id);
      res.status(200).json({
        message: "completed",
      });
    });
  }
}
