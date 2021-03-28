import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Person } from './models/person.model';
import { PersonService } from './person.service';
import { PersonCreateDto } from './dto/person.create';

@Resolver((type) => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((type) => Person, { name: 'person' })
  async getPerson(@Args('id', { type: () => Int }) id: number) {
    return await this.personService.findById(id);
  }

  @Mutation((type) => Person)
  async createPerson(
    @Args('personCreateDto') personCreateDto: PersonCreateDto,
  ) {
    return await this.personService.createPerson(personCreateDto);
  }
}
