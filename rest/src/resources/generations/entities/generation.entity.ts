import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "../../pokemon/entities/pokemon.entity";

@Entity()
export class Generation {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.generation)
  pokemon?: Pokemon[];
}
