import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class SubjectCreateDto {
  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  name: string;
}
