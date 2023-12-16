import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Type } from "../types/type.entity";

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

  @Column()
  height!: number;

  @Column()
  weight!: number;

  @ManyToMany(() => Type, (type) => type.name, {
    cascade: true,
  })
  @JoinTable()
  types?: Type[];
}
