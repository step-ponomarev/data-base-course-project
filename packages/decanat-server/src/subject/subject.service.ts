import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subject } from '../database/entities/subject.entity';
import { SubjectCreateDto } from './dto/subject.create';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  public async findById(id: number): Promise<Subject> {
    return this.subjectRepository.findOne({ id: id });
  }

  public async findAll(): Promise<Array<Subject>> {
    return this.subjectRepository.find();
  }

  public async saveSubject(subjectCreateDto: SubjectCreateDto): Promise<Subject> {
    const subject = this.createSubject(subjectCreateDto);

    return this.subjectRepository.save(subject);
  }

  private createSubject(subjectGroupDto: SubjectCreateDto): Subject {
    return this.subjectRepository.create({ name: subjectGroupDto.name });
  }
}
