import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { PersonType } from '../models/person.model';

@InputType()
export class PersonCreateDto {
  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  firstName: string;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  lastName: string;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  patherName: string;

  @Field((type) => Int, { nullable: true })
  group: number;

  @Field((type) => PersonType, { nullable: false })
  type: PersonType;
}
