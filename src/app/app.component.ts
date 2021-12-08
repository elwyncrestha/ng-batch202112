import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-batch202112';
  incrementingNumber = 0;

  ngOnInit(): void {
    setInterval(() => this.incrementingNumber++, 1000);
  }

  handleBtnClick(): void {
    this.title = this.title === 'ng-batch202112' ? 'Click me again!' : 'ng-batch202112';
  }

  resetCounter(): void {
    this.incrementingNumber = 0;
  }
}
