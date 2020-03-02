import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  beverageList: object[] = [
    {
      value: "---------"
    },
    {
      value: "Whiskey"
    },
    {
      value: "Beer"
    },
    {
      value: "Milk"
    },
    {
      value: "Water"
    }
  ];

  @Output() selectedBeverage: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

  }
  ngOnInit(): void {

  }

}
