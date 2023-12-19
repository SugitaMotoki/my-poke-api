import { DatabaseService } from "../../database";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Type } from "./entities/type.entity";
import { Repository } from "typeorm";

export class TypeService {
  private readonly databaseService: DatabaseService;
  private readonly typeRepository: Repository<Type>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.typeRepository = this.databaseService.dataSource.getRepository(Type);
  }

  public async create(createTypeDto: CreateTypeDto) {
    const newType = TypeService.createInstance(createTypeDto);
    return await this.typeRepository.save(newType);
  }

  public async findAll() {
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

  private static createInstance(dto: CreateTypeDto) {
    const type = new Type();
    type.name = dto.name;
    return type;
  }
}
