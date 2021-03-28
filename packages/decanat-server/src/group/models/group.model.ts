import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Group {
  @Field((type) => Int)
  id: number;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  name: string;
}
