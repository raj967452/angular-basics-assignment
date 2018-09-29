import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStatusService } from '../services/user-status.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private userStateService: UserStatusService) { }

  ngOnInit() {
  }
  toSetActiveuser(id: number) {
    // this.userSetToActive.emit(id);
    this.userStateService.onSetToActive(id);
  }

}
