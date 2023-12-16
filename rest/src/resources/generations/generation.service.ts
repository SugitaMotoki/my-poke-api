import { DatabaseService } from "../../database";
import { CreateGenerationDto } from "./dto/create-generation.dto";
import { Generation } from "./generation.entity";
import { Repository } from "typeorm";

export class GenerationService {
  private readonly databaseService: DatabaseService;
  private readonly generationRepository: Repository<Generation>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.generationRepository =
      this.databaseService.dataSource.getRepository(Generation);
  }

  public async create(createGenerationDto: CreateGenerationDto) {
    const newGeneration: Generation =
      GenerationService.createInstance(createGenerationDto);
    return await this.generationRepository.save(newGeneration);
  }

  public async findAll() {
    return await this.generationRepository.find({
      relations: {},
    });
  }

  public async findOne(id: number) {
    return await this.generationRepository.findOne({
      where: { id },
      relations: {},
    });
  }

  private static createInstance(dto: CreateGenerationDto) {
    const generation = new Generation();
    generation.name = dto.name;
    return generation;
  }
}
