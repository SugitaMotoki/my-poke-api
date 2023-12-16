import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Generation {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;
}
