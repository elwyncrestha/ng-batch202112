import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.userService.fetchUser();
  }

}
