import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Type } from "../types/type.entity";
import { Generation } from "../generations/generation.entity";

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

  @ManyToOne(() => Generation, (generation) => generation.pokemons, {
    nullable: false,
  })
  generation?: Generation;

  @ManyToMany(() => Type, (type) => type.name, {
    cascade: true,
  })
  @JoinTable()
  types?: Type[];
}
