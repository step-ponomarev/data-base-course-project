import { Injectable } from '@nestjs/common';
import { Person } from './models/person.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonCreateDto } from './dto/person.create';
import { Group } from '../database/entities/group.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async findById(id: number): Promise<Person> {
    return this.personRepository.findOne({ id: id });
  }

  async createPerson(createPersonDto: PersonCreateDto): Promise<Person> {
    const group: Group | null = await this.findGroup(createPersonDto.group_id);
    const person: Person = this.personRepository.create({
      firstName: createPersonDto.firstName,
      lastName: createPersonDto.lastName,
      patherName: createPersonDto.patherName,
      type: createPersonDto.type,
      group,
    });

    return this.personRepository.save(person);
  }

  private async findGroup(id: number): Promise<Group | null> {
    const group: Group | undefined = await this.groupRepository.findOne(id);

    return group ? group : null;
  }
}
