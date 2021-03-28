import { PersonService } from './person.service';
import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';
import { DatabaseModule } from '../database/database.module';
import { GroupService } from '../group/group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../database/entities/person.entity';
import { Group } from '../database/entities/group.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Person, Group])],
  providers: [PersonService, GroupService, PersonResolver],
})
export class PersonModule {}
