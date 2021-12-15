import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Subscription } from '../models/subscription.model';

@Injectable({providedIn: 'root'})
export class SubscriptionService extends BaseService<Subscription> {
  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  protected getApi(): string {
    return `v1/subscription`;
  }

}
