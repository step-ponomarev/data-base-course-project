import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from '../database/entities/group.entity';
import { GroupService } from './group.service';
import { Person } from '../person/models/person.model';
import { GroupCreateDto } from './dto/group.create';

@Resolver((type) => Group)
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Query((type) => Group, { name: 'person' })
  async getGroup(@Args('id', { type: () => Int }) id: number) {
    return await this.groupService.findById(id);
  }

  @Mutation((type) => Person)
  async createGroup(@Args('groupCreateDto') groupCreateDto: GroupCreateDto) {
    return await this.groupService.saveGroup(groupCreateDto);
  }
}
