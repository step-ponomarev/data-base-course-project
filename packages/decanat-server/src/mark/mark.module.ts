import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkResolver } from './mark.resolver';
import { MarkService } from './mark.service';
import { Module } from '@nestjs/common';
import { Mark } from '../database/entities/mark.entity';
import { Person } from '../database/entities/person.entity';
import { Subject } from '../database/entities/subject.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Mark, Person, Subject])],
  providers: [MarkService, MarkResolver],
})
export class MarkModule {}
