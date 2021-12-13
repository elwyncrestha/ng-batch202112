import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user$!: Observable<User>;
  user!: User;
  isMale = true;
  _destroy = new Subject<void>();

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    console.log('INITIALIZED PROFILE COMPONENT!');
    this.user$ = this.userService.user$;
    this.user$.pipe(takeUntil(this._destroy)).subscribe((r) => {
      console.log(r);
    });
    setInterval(() => this.userService.setUserDetails(), 1000);
  }

  ngOnDestroy(): void {
    console.log('DESTORYED PROFILE COMPONENT!');
    this._destroy.next();
    this._destroy.complete();
  }

}
