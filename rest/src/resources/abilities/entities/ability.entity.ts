import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PokemonToAbility } from "../../pokemon/entities/pokemon-to-ability.entity";

@Entity()
export class Ability {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  flavorText!: string;

  @Column()
  description!: string;

  @OneToMany(
    () => PokemonToAbility,
    (pokemonToAbility) => pokemonToAbility.ability,
  )
  pokemonToAbilities?: PokemonToAbility[];
}
