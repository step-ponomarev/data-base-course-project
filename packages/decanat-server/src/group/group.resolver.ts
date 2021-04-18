import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { Person } from '../person/models/person.model';
import { GroupCreateDto } from './dto/group.create';
import { Group } from './models/group.model';

@Resolver((type) => Group)
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Query((type) => Group, { name: 'group' })
  public async getGroup(@Args('id', { type: () => Int }) id: number) {
    return await this.groupService.findById(id);
  }

  @Query((type) => [Group], { name: 'groups' })
  public async getGroups() {
    return await this.groupService.findAll();
  }

  @Mutation((type) => Person)
  public async createGroup(@Args('groupCreateDto') groupCreateDto: GroupCreateDto) {
    return await this.groupService.saveGroup(groupCreateDto);
  }
}
