import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
