import { PersonService } from './person.service';
import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';

@Module({
  providers: [PersonService, PersonResolver],
})
export class PersonModule {}
