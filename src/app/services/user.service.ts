import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { USERS_MOCK } from './user-mock.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _user: Subject<User>;
  readonly user$: Observable<User>;
  isMale = true;

  constructor() {
    this._user = new Subject<User>();
    this.user$ = this._user.asObservable();
  }

  setUserDetails() {
    this.isMale = !this.isMale;
    this._user.next(USERS_MOCK[this.isMale ? 0 : 1]);
  }
}
