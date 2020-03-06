import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  firstname: string = "";
  inputValue: string = "";
gotName:boolean = false;
  foundStorage: boolean = false;
  addName(name: string) {
    this.firstname = name;
    this.gotName = true;
    localStorage.setItem("Firstname", name);
    this.foundName();
  }
  beverage:string;
  handleBeverage(gotBeverage: string) {
    this.beverage = gotBeverage;
    console.log("Från child" + this.beverage);

  }

  foundName() {
    if (localStorage.getItem("Firstname")) {
      this.foundStorage = true;
    }
  }

  constructor() {

  }

  ngOnInit(): void {

  }


}
