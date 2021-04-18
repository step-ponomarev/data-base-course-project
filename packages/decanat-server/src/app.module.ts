import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonModule } from './person/person.module';
import { DatabaseModule } from './database/database.module';
import { GroupModule } from './group/group.module';
import { MarkModule } from './mark/mark.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [
    PersonModule,
    GroupModule,
    MarkModule,
    SubjectModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
