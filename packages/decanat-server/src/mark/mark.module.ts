import { DatabaseModule } from '../database/database.module';
import { Person } from '../database/entities/person.entity';
import { Group } from '../database/entities/group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkResolver } from './mark.resolver';
import { MarkService } from './mark.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Group, Person])],
  providers: [MarkService, MarkResolver],
})
export class PersonModule {}
