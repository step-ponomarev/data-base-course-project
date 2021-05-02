import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Max, Min } from 'class-validator';

@InputType()
export class MarksUpdateDto {
  @IsNotEmpty()
  @Field((type) => [ID], { nullable: false })
  ids: any[];

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
