import { Args, Int, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Person, PersonType } from './models/person.model';
import { PersonService } from './person.service';
import { PersonCreateDto } from './dto/person.create';
import { PeopleChangeDto } from './dto/people.change';

@Resolver((type) => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((type) => Person, { name: 'person' })
  public async getPerson(@Args('id', { type: () => Int }) id: number) {
    return await this.personService.findById(id);
  }

  @Query((type) => [Person], { name: 'peopleByType' })
  public async getPeopleByType(@Args('type', { type: () =>  PersonType }) type: PersonType) {
    return await this.personService.findByPersonType(type);
  }

  @Query((type) => [Person], { name: 'people' })
  public async getPeople() {
    return await this.personService.findAll();
  }

  @Mutation((type) => [Person])
  public async changePeople(
    @Args('peopleChangeDto') peopleChangeDto: PeopleChangeDto,
  ) {
    return await this.personService.changePeople(peopleChangeDto);
  }

  @Mutation((type) => Person)
  public async createPerson(
    @Args('personCreateDto') personCreateDto: PersonCreateDto,
  ) {
    return await this.personService.savePerson(personCreateDto);
  }
}
