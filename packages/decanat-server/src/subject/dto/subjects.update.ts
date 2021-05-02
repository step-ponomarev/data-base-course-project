import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class SubjectsUpdateDto {
  @IsNotEmpty()
  @Field((type) => [ID], { nullable: false })
  ids: any[];

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  name: string;
}
