import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Group } from '../../group/models/group.model';

export enum PersonType {
  STUDENT,
  TEACHER,
}

registerEnumType(PersonType, {
  name: 'PersonType',
});

@ObjectType()
export class Person {
  @Field((type) => Int)
  id: number;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  firstName: string;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  lastName: string;

  @IsNotEmpty()
  @Field((type) => String, { nullable: false })
  patherName: string;

  @Field((type) => Group, { nullable: true })
  group: Group | null;

  @Field((type) => PersonType, { nullable: false })
  type: PersonType;
}
