import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../models/inventory.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventories$!: Observable<Inventory[]>;

  constructor(private readonly inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.fetchInventories();
  }

  fetchInventories(): void {
    this.inventories$ = this.inventoryService.getAll();
  }

  deleteInventory(id: number | undefined): void {
    if (!id) {
      return;
    }
    this.inventoryService.delete(id).subscribe(() => {
      this.fetchInventories();
    });
  }

}
