import PromiseRouter from "express-promise-router";
import { PokemonService } from "./pokemon.service";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";

export class PokemonController {
  public readonly router;
  private readonly pokemonService: PokemonService;

  public constructor(pokemonService: PokemonService) {
    this.router = PromiseRouter();
    this.pokemonService = pokemonService;
    this.defineRoute();
  }

  private defineRoute() {
    this.router.get("/", async (_req, res) => {
      const pokemons = await this.pokemonService.findAll();
      res.json(pokemons);
    });

    this.router.get("/:id", async (req, res) => {
      const id = Number(req.params.id);
      const pokemon = await this.pokemonService.findOne(id);
      if (!pokemon) {
        res.status(404);
      }
      res.json(pokemon);
    });

    this.router.post("/", async (req, res) => {
      const createPokemonDto: CreatePokemonDto = req.body;
      const pokemon = await this.pokemonService.create(createPokemonDto);
      res.status(201).json(pokemon);
    });

    this.router.delete("/:id", async (req, res) => {
      const id = Number(req.params.id);
      await this.pokemonService.remove(id);
      res.status(200).json({
        message: "completed",
      });
    });
  }
}
