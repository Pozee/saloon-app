import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  firstname: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
