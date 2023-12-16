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
  name: string;

  @ManyToMany(() => Type, (type) => type.name, {
    cascade: true,
  })
  @JoinTable()
  types?: Type[];

  constructor(name: string) {
    this.name = name;
  }
}
