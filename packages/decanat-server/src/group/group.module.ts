import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './group.service';
import { Group } from '../database/entities/group.entity';
import { GroupResolver } from './group.resolver';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Group])],
  providers: [GroupService, GroupResolver],
})
export class GroupModule {}
