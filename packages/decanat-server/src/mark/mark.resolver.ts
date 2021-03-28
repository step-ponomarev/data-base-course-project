import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from '../database/entities/group.entity';
import { Person } from '../person/models/person.model';
import { MarkCreateDto } from './dto/mark.create.dto';
import { MarkService } from './mark.service';

@Resolver((type) => Group)
export class MarkResolver {
  constructor(private markService: MarkService) {}

  @Query((type) => Group, { name: 'person' })
  async getGroup(@Args('id', { type: () => Int }) id: number) {
    return await this.markService.findById(id);
  }

  @Mutation((type) => Person)
  async createGroup(@Args('markCreateDto') markCreateDto: MarkCreateDto) {
    return await this.markService.saveMark(markCreateDto);
  }
}
