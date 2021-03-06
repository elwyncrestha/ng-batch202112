import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Inventory } from '../models/inventory.model';

@Injectable({ providedIn: 'root' })
export class InventoryService extends BaseService<Inventory> {

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  protected getApi(): string {
    return `v1/inventory`;
  }
}
