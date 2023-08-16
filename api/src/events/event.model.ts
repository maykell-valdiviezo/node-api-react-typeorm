import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsUUID } from "class-validator";

@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID(4)
  id!: string;

  @Column({ length: 32 })
  name!: string;

  @Column()
  description!: string;

  @Column()
  @IsNumber()
  startDate!: number;

  @Column()
  @IsNumber()
  endDate!: number;
}
