import { Subject } from '../database/entities/subject.entity';
import { Person } from '../database/entities/person.entity';
import { Mark } from '../database/entities/mark.entity';
import { MarkCreateDto } from './dto/mark.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class MarkService {
  constructor(
    @InjectRepository(Mark)
    private markRepository: Repository<Mark>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findById(id: number): Promise<Mark> {
    return this.markRepository.findOne({ id: id });
  }

  async saveMark(markCreateDto: MarkCreateDto): Promise<Mark> {
    const mark: Mark = await this.createMark(markCreateDto);

    return this.markRepository.save(mark);
  }

  private async createMark(createMarkDto: MarkCreateDto): Promise<Mark> {
    const student: Person = await this.personRepository.findOne(
      createMarkDto.student_id,
    );

    const teacher: Person = await this.personRepository.findOne(
      createMarkDto.teacher_id,
    );

    const subject: Subject = await this.subjectRepository.findOne(
      createMarkDto.subject_id,
    );

    return this.markRepository.create({
      value: createMarkDto.value,
      student: student,
      teacher: teacher,
      subject: subject,
    });
  }
}
