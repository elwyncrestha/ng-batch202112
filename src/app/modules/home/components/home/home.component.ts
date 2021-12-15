import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
  }

  submit(form: any): void {
    this.subscriptionService.save(form.value).subscribe(() => {
      form.controls.email.setValue(undefined);
    });
  }

}
