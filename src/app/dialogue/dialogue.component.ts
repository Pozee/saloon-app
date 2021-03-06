import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import { userInformationService } from '../user-information.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  firstname: string;
  inputValue: string;
  gotName: boolean = false;
  foundStorage: boolean = false;

  addName(name: string) {
    this.firstname = name;
    this.gotName = true;
    this.userInfo.saveName(name);
  }

  gotBeverage: boolean = false;
  beverage: string;

  handleBeverage(gotBeverage: string) {
    this.beverage = gotBeverage;
    this.gotBeverage = true;
  }

  storedBeverage: string;
  gotStoredBeverage(storedBeverage: string) {
    this.beverage = storedBeverage;
    this.gotBeverage = true;
  }
  constructor(private userInfo: userInformationService) {

  }
  noStoredName: boolean = false;
  noStoredBeverage: boolean = false;

  ngOnInit() {
    if (localStorage.getItem("Name") !== null) {
      this.firstname = localStorage.getItem("Name");
      this.gotName = true;
    } else {
      this.noStoredName = true;
    };

    if (localStorage.getItem("Beverage") !== null) {
      this.storedBeverage = localStorage.getItem("Beverage");
      this.noStoredBeverage = true;
    } else
      this.noStoredBeverage = false;
  }


}
