import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-batch202112';

  handleBtnClick(): void {
    this.title = this.title === 'ng-batch202112' ? 'Click me again!' : 'ng-batch202112';
  }
}
