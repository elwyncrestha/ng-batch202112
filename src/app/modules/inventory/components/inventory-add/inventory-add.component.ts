import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.scss'],
})
export class InventoryAddComponent implements OnInit {
  form!: FormGroup;
  showError = false;

  constructor(
    private readonly inventoryService: InventoryService,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.fillFormIfRequired();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: this.fb.control(undefined, Validators.required),
      name: this.fb.control('', Validators.required),
      quantity: this.fb.control(0, [Validators.required, Validators.min(100)]),
    });
  }

  private fillFormIfRequired(): void {
    const inventoryIdString = this.activatedRoute.snapshot.paramMap.get('id');
    if (!inventoryIdString) {
      return;
    }
    const inventoryId = Number(inventoryIdString);
    this.inventoryService.getOne(inventoryId).pipe(take(1)).subscribe((inventory) => {
      this.form.patchValue(inventory);
    });
  }

  submit(): void {
    this.inventoryService.save(this.form.value).subscribe(() => {
      this.showError = false;
      this.form.reset();
      this.router.navigate(['/home/inventories/list']);
    }, () => {
      this.showError = true;
    });
  }
}
