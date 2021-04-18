import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MarkCreateDto } from './dto/mark.create.dto';
import { MarkService } from './mark.service';
import { Mark } from './models/mark.model';

@Resolver((type) => Mark)
export class MarkResolver {
  constructor(private markService: MarkService) {}

  @Query((type) => Mark, { name: 'mark' })
  public async getMark(@Args('id', { type: () => Int }) id: number) {
    return await this.markService.findById(id);
  }

  @Query((type) => [Mark], { name: 'marks' })
  public async getMarks() {
    return await this.markService.findAll();
  }

  @Mutation((type) => Mark)
  public async createGroup(@Args('markCreateDto') markCreateDto: MarkCreateDto) {
    return await this.markService.saveMark(markCreateDto);
  }
}
