import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  footerContent = '2021 Angular Training - Cotiviti';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  handleHeaderBtnClicked(value: string): void {
    this.router.navigate(['/home/profile']);
  }

}
