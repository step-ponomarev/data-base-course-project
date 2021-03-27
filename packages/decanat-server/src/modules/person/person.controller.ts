import {Controller, Get, Inject} from "@nestjs/common";
import {PersonService} from "./person.service";

@Controller('person')
export class PersonController {
    @Inject('')
    private readonly personService: PersonService;
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}