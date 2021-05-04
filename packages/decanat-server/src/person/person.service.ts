import { Injectable } from '@nestjs/common';
import { Person, PersonType } from './models/person.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonCreateDto } from './dto/person.create';
import { Group } from '../database/entities/group.entity';
import { PeopleUpdateDto } from './dto/people.change';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  public async findAll(): Promise<Array<Person>> {
    return this.personRepository.find();
  }

  public async findById(id: number): Promise<Person> {
    return this.findPerson(id);
  }

  public async savePerson(createPersonDto: PersonCreateDto): Promise<Person> {
    const group: Group | null = await this.findGroup(createPersonDto.group);
    const person: Person = this.createPerson(createPersonDto, group);

    return this.personRepository.save(person);
  }

  public async findByPersonType(type: PersonType): Promise<Person[]> {
    return this.personRepository.find({ type: type })
  }

  public async updatePeople(peopleChangeDto: PeopleUpdateDto): Promise<Person[]> {
    const people: Person[] = await this.personRepository.findByIds(peopleChangeDto.ids);
    people.map(async person => await this.updatePerson(person, peopleChangeDto));

    return this.personRepository.save(people);
  }

  public async deletePeople(ids: number[]): Promise<number[]> {
    await this.personRepository.delete(ids);
    return ids;
  }

  private async updatePerson(person: Person, changeDto: PeopleUpdateDto): Promise<Person> {
    person.type = changeDto.type;
    person.firstName = changeDto.firstName;
    person.lastName = changeDto.lastName;
    person.patherName = changeDto.patherName;
    person.group = await this.findGroup(changeDto.group);

    return person;
  }

  private async findPerson(id: number): Promise<Person | null> {
    const person: Person | undefined = await this.personRepository.findOne(id);

    return person ? person : null;
  }

  private async findGroup(id: number): Promise<Group | null> {
    const group: Group | undefined = await this.groupRepository.findOne(id);

    return group ? group : null;
  }

  private createPerson(
    createPersonDto: PersonCreateDto,
    group: Group | null,
  ): Person {
    return this.personRepository.create({
      firstName: createPersonDto.firstName,
      lastName: createPersonDto.lastName,
      patherName: createPersonDto.patherName,
      type: createPersonDto.type,
      group,
    });
  }
}
