import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C404Component } from './c404.component';

describe('C404Component', () => {
  let component: C404Component;
  let fixture: ComponentFixture<C404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
