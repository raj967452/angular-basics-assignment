import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameControlData;
  counter;

  constructor() {}
  onReceiveCounter(receivedNumber) {
    // this.gameControlData = event;
    this.counter = receivedNumber;
    this.gameControlData = receivedNumber % 2 === 0 ? true : false;
  }
  // onEvenOddCheck(){
  //   return this.gameControlData % 2 === 0 ? true : false;
  // }
}

