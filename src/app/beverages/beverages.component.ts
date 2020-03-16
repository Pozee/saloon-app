import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { userInformationService } from '../user-information.service';

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
    this.sendBeverage.emit(this.selectedBeverage)
    this.userInfo.saveBeverage(beverageList.value);
  }




  constructor(private userInfo: userInformationService) {

  }
  ngOnInit(): void {

  }

}
