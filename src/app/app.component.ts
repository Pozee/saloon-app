import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saloon-app';
  beverage: string;
  handleBeverage(gotBeverage: string) {
    gotBeverage = this.beverage;
    console.log(this.beverage);

  }
}

