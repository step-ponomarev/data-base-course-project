import { Injectable } from '@nestjs/common';
import { Person } from './models/person.model';

//TODO: Замокано
@Injectable()
export class PersonService {
  private readonly cats: any[] = [];

  findById(id: number): Person {
    return {
      id: id,
      firstName: 'Степан',
      lastName: 'Пономарев',
      patherName: 'Павлович',
    };
  }
}
