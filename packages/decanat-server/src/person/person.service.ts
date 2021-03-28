import { Injectable } from '@nestjs/common';
import { Person } from './models/person.model';

@Injectable()
export class PersonService {
  private readonly cats: any[] = [];

  findById(id: number): Person {
    return null;
  }
}
