import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval, Observable, Subject , Subscription } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private source;
  counter = 0;
  @Output() counterEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  startGame(event) {
    // this.source = setInterval(() => { this.counter++; }, 1000);
    const setIntervalTimer = interval(1000);
    this.source = setIntervalTimer.subscribe((val) => this.counterEvent.emit(val));
  }

  stopGame(event) {
    // clearInterval(this.source);
    this.source.unsubscribe();
  }

}
