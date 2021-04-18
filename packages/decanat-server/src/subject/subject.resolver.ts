import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { SubjectCreateDto } from './dto/subject.create';
import { Subject } from './models/subject.model';

@Resolver((type) => Subject)
export class SubjectResolver {
  constructor(private subjectService: SubjectService) {}

  @Query((type) => Subject, { name: 'subject' })
  async getSubject(@Args('id', { type: () => Int }) id: number) {
    return await this.subjectService.findById(id);
  }

  @Query((type) => [Subject], { name: 'subjects' })
  async getSubjects() {
    return await this.subjectService.findAll();
  }

  @Mutation((type) => Subject)
  async createSubject(
    @Args('subjectCreateDto') subjectCreateDto: SubjectCreateDto,
  ) {
    return await this.subjectService.saveSubject(subjectCreateDto);
  }
}
