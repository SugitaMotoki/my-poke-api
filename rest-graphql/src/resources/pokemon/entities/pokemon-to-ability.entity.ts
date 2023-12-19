import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./pokemon.entity";
import { Ability } from "../../abilities/entities/ability.entity";

@Entity()
export class PokemonToAbility {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  isHidden!: boolean;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.abilities, {
    nullable: false,
  })
  pokemon!: Pokemon;

  @ManyToOne(() => Ability, (ability) => ability.pokemons, {
    nullable: false,
  })
  ability!: Ability;
}
