import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '../database/entities/subject.entity';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Subject])],
  providers: [SubjectService, SubjectResolver],
})
export class SubjectModule {}
