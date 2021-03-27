import {PersonService} from "./person.service";

@Module({
    controllers: [CatsController],
    providers: [PersonService],
})

export class PersonModule {}