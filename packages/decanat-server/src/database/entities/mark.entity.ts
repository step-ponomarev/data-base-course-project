import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from './person.entity';
import { Subject } from './subject.entity';

@Entity()
export class Mark {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'student_id' })
  @ManyToOne(() => Person, { nullable: false, cascade: true })
  student: Person;

  @JoinColumn({ name: 'subject_id' })
  @ManyToOne(() => Subject, { nullable: false, cascade: true })
  subject: Subject;

  @JoinColumn({ name: 'person_id' })
  @ManyToOne(() => Person, { nullable: false })
  teacher: Person;

  @Column()
  value: number;
}
