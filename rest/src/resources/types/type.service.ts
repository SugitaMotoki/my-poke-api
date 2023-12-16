import { DatabaseService } from "../../database";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Type } from "./type.entity";
import { Repository } from "typeorm";

export class TypeService {
  private readonly databaseService: DatabaseService;
  private readonly typeRepository: Repository<Type>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.typeRepository = this.databaseService.dataSource.getRepository(Type);
  }

  public async create(createTypeDto: CreateTypeDto) {
    const newType: Type = createTypeDto;
    return await this.typeRepository.save(newType);
  }

  public async findAll(): Promise<Type[]> {
    return await this.typeRepository.find({
      relations: {},
    });
  }

  public async findOne(id: number) {
    return await this.typeRepository.findOne({
      where: { id },
      relations: {},
    });
  }

  public async remove(id: number) {
    return await this.typeRepository.delete(id);
  }
}
