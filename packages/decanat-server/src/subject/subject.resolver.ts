import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { SubjectCreateDto } from './dto/subject.create';
import { Subject } from './models/subject.model';
import { SubjectsUpdateDto } from './dto/subjects.update';

@Resolver((type) => Subject)
export class SubjectResolver {
  constructor(private subjectService: SubjectService) {}

  @Query((type) => Subject, { name: 'subject' })
  public async getSubject(@Args('id', { type: () => Int }) id: number) {
    return await this.subjectService.findById(id);
  }

  @Query((type) => [Subject], { name: 'subjects' })
  public async getSubjects() {
    return await this.subjectService.findAll();
  }

  @Mutation((type) => Subject)
  public async createSubject(
    @Args('subjectCreateDto') subjectCreateDto: SubjectCreateDto,
  ) {
    return await this.subjectService.saveSubject(subjectCreateDto);
  }

  @Mutation((type) => Subject)
  public async updateSubject(
    @Args('subjectsUpdateDto') subjectsUpdateDto: SubjectsUpdateDto,
  ) {
    return await this.subjectService.updateSubjects(subjectsUpdateDto);
  }
}
