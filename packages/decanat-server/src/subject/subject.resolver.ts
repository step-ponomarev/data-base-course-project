import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from '../database/entities/group.entity';
import { SubjectService } from './subject.service';
import { Person } from '../person/models/person.model';
import { SubjectCreateDto } from './dto/subject.create';

@Resolver((type) => Group)
export class SubjectResolver {
  constructor(private subjectService: SubjectService) {}

  @Query((type) => Group, { name: 'person' })
  async getGroup(@Args('id', { type: () => Int }) id: number) {
    return await this.subjectService.findById(id);
  }

  @Mutation((type) => Person)
  async createGroup(
    @Args('subjectCreateDto') subjectCreateDto: SubjectCreateDto,
  ) {
    return await this.subjectService.saveSubject(subjectCreateDto);
  }
}
