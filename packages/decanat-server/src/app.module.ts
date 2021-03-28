import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonModule } from './person/person.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    PersonModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
