import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryAddComponent } from './components/inventory-add/inventory-add.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: InventoryListComponent
  },
  {
    path: 'new',
    component: InventoryAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
