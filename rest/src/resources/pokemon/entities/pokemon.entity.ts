import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Type } from "../../types/entities/type.entity";
import { Generation } from "../../generations/entities/generation.entity";
import { PokemonToAbility } from "./pokemon-to-ability.entity";

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  pokedex!: number;

  @Column()
  genus!: string;

  @Column({ type: "real" })
  height!: number;

  @Column({ type: "real" })
  weight!: number;

  @ManyToOne(() => Generation, (generation) => generation.pokemon, {
    nullable: false,
  })
  generation?: Generation;

  @ManyToMany(() => Type, (type) => type.pokemon, {
    cascade: true,
  })
  @JoinTable()
  types?: Type[];

  @OneToMany(
    () => PokemonToAbility,
    (pokemonToAbility) => pokemonToAbility.pokemon,
  )
  pokemonToAbilities?: PokemonToAbility[];
}
