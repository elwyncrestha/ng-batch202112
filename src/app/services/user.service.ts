import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserDetails(): User {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: 'Nepal',
      dob: new Date(),
      salary: 50000
    };
  }
}
