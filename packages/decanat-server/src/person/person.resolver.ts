import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Person } from './models/person.model';
import { PersonService } from './person.service';

@Resolver((of) => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((returns) => Person, { name: 'person' })
  async getPerson(@Args('id', { type: () => Int }) id: number) {
    return this.personService.findById(id);
  }
}
