import PromiseRouter from "express-promise-router";
import { TypeService } from "./type.service";
import { CreateTypeDto } from "./dto/create-type.dto";

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
  }
}
