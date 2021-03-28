import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    PersonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
