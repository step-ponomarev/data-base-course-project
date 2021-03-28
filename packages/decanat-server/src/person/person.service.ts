import { Injectable } from '@nestjs/common';
import { Person } from './models/person.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async findById(id: number): Promise<Person> {
    return this.personRepository.findOne({ id: id });
  }
}
