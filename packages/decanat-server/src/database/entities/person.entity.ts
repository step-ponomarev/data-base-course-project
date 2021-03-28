import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';

export enum PersonType {
  STUDENT,
  TEACHER,
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  patherName: string;

  @JoinColumn({ name: 'group_id' })
  @ManyToOne(() => Group, { nullable: true, cascade: true })
  group: Group | null;

  @Column()
  type: PersonType;
}
