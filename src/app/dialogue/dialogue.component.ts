import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import { userInformationService } from '../user-information.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  firstname: string = "";
  inputValue: string = "";
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

  constructor(private userInfo: userInformationService) {

  }


  ngOnInit(): void { }


}
