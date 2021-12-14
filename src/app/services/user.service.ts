import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { AppConstant } from '../constants/app.constant';
import { User } from '../models/user.model';
import { USER_MOCK } from './user-mock.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _user: BehaviorSubject<User>;
  readonly user$: Observable<User>;

  constructor(private readonly http: HttpClient) {
    this._user = new BehaviorSubject<User>(USER_MOCK);
    this.user$ = this._user.asObservable();
  }

  fetchUser(): void {
    const baseUrl = AppConstant.getEnvUrl();
    this.http
      .get<User>(`${baseUrl}/user-mock.json`)
      .pipe(take(1))
      .subscribe((user) => {
        this._user.next(user);
      });
  }
}
