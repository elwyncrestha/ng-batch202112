import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  footerContent = '2021 Angular Training - Cotiviti';

  constructor() { }

  ngOnInit(): void {
  }

}
