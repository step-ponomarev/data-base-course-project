import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { PersonType } from '../models/person.model';

@InputType()
export class PeopleChangeDto {
  @IsNotEmpty()
  @Field((type) => [ID], { nullable: false })
  ids: any[];

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
  group_id: number;

  @Field((type) => PersonType, { nullable: false })
  type: PersonType;
}
