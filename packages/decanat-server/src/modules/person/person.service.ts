import {Injectable} from '@nestjs/common';

@Injectable()
export class PersonService {
    private readonly cats: any[] = [];

    findAll(): any[] {
        return this.cats;
    }
}