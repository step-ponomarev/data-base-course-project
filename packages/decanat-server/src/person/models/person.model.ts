import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Person {
  @Field(() => Int)
  id: number;

  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  firstName: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  lastName: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  patherName: string;
}
