import { Subject } from '../../subject/models/subject.model';
import { Person } from '../../person/models/person.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, Max, Min } from 'class-validator';

@ObjectType()
export class Mark {
  @Field((type) => Int)
  id: number;

  @IsNotEmpty()
  @Field((type) => Person, { nullable: false })
  student: Person;

  @IsNotEmpty()
  @Field((type) => Subject, { nullable: false })
  subject: Subject;

  @IsNotEmpty()
  @Field((type) => Person, { nullable: false })
  teacher: Person;

  @Min(2)
  @Max(5)
  @Field((type) => Int, { nullable: false })
  value: number;
}
