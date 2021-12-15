import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.scss'],
})
export class InventoryAddComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly inventoryService: InventoryService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl(0, [Validators.required, Validators.min(100)]),
    });
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      quantity: this.fb.control(0, [Validators.required, Validators.min(100)]),
    });
  }

  submit(): void {
    this.inventoryService.save(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/home/inventories/list']);
    });
  }
}
