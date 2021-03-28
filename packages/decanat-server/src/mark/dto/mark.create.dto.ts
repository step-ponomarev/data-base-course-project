import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Max, Min } from 'class-validator';

@InputType()
export class MarkCreateDto {
  @IsNotEmpty()
  @Field((type) => Int, { nullable: false })
  student_id: number;

  @IsNotEmpty()
  @Field((type) => Int, { nullable: false })
  subject_id: number;

  @IsNotEmpty()
  @Field((type) => Int, { nullable: false })
  teacher_id: number;

  @Min(2)
  @Max(5)
  @Field((type) => Int, { nullable: false })
  value: number;
}
