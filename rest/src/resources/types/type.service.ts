import { DatabaseService } from "../../database";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Type } from "./type.entity";
import { Repository } from "typeorm";

export class TypeService {
  private readonly databaseService: DatabaseService;
  private readonly repository: Repository<Type>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.repository = this.databaseService.dataSource.getRepository(Type);
  }

  public async create(createTypeDto: CreateTypeDto) {
    const newType: Type = createTypeDto;
    return await this.repository.save(newType);
  }

  public async findAll(): Promise<Type[]> {
    return await this.repository.find({
      relations: {},
    });
  }

  public async findOne(id: number) {
    return await this.repository.findOne({
      where: { id },
      relations: {},
    });
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
