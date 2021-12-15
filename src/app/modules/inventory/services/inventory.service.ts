import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Inventory } from '../models/inventory.model';

@Injectable({ providedIn: 'root' })
export class InventoryService extends BaseService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.getFullUrl()).pipe(
      tap(() => console.log('GET INVENTORIES EXECUTED!'),
      catchError((error) => {
        console.log('Custom error: ', error);
        return of();
      }),
      )
    );
  }

  protected getApi(): string {
    return `v1/inventory`;
  }
}
