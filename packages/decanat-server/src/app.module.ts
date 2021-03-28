import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [
    PersonModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
