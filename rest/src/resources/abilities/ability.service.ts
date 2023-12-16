import { DatabaseService } from "../../database";
import { CreateAbilityDto } from "./dto/create-ability.dto";
import { Ability } from "./entities/ability.entity";
import { Repository } from "typeorm";

export class AbilityService {
  private readonly databaseService: DatabaseService;
  private readonly abilityRepository: Repository<Ability>;

  public constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.abilityRepository =
      this.databaseService.dataSource.getRepository(Ability);
  }

  public async create(createAbilityDto: CreateAbilityDto) {
    const newAbility = AbilityService.createInstance(createAbilityDto);
    return await this.abilityRepository.save(newAbility);
  }

  public async findAll() {
    return await this.abilityRepository.find({
      relations: {
        pokemonToAbilities: {
          pokemon: true,
        },
      },
    });
  }

  public async findOne(id: number) {
    return await this.abilityRepository.findOne({
      where: { id },
      relations: {
        pokemonToAbilities: {
          pokemon: true,
        },
      },
    });
  }

  public async remove(id: number) {
    return await this.abilityRepository.delete(id);
  }

  private static createInstance(dto: CreateAbilityDto) {
    const ability = new Ability();
    ability.name = dto.name;
    ability.flavorText = dto.flavorText;
    ability.description = dto.description;
    return ability;
  }
}
