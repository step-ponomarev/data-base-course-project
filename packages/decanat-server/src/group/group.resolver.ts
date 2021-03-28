import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Group } from '../database/entities/group.entity';
import { GroupService } from './group.service';

@Resolver((of) => Group)
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Query((returns) => Group, { name: 'person' })
  async getPerson(@Args('id', { type: () => Int }) id: number) {
    return await this.groupService.findById(id);
  }
}
