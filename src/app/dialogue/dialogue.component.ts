import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  firstname: string = "";
  inputValue: string = "";
  gotName = false;
  foundStorage: boolean = false;
  addName(name: string) {
    this.firstname = name;
    this.gotName = true;
    localStorage.setItem("Firstname", name);
    this.foundName();
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
