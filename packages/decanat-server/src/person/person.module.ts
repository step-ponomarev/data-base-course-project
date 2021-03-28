import { PersonService } from './person.service';
import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../database/entities/person.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Person])],
  providers: [PersonService, PersonResolver],
})
export class PersonModule {}
