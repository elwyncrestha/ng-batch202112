import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryAddComponent } from './components/inventory-add/inventory-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryAddComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule
  ]
})
export class InventoryModule { }
