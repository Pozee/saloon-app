import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  beverageList: object[] = [
    {
      Id: "1",
      value: "Whiskey"
    },
    {
      Id: "2",
      value: "Beer"
    },
    {
      Id: "3",
      value: "Milk"
    },
    {
      Id: "4",
      value: "Water"
    }
  ];
  @Output() sendBeverage: EventEmitter<any> = new EventEmitter<any>();
  selectedBeverage: string = "";
  choosenBeverage(beverageList): void {
    this.selectedBeverage = beverageList.value;
    localStorage.setItem("Drink", this.selectedBeverage);
    this.sendBeverage.emit(this.selectedBeverage)
  }




  constructor() {

  }
  ngOnInit(): void {

  }

}
