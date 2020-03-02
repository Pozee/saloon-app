import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saloon-app';
  public handleBeverage(event: any): void {
    console.log("Beverage", event);
  }
}
