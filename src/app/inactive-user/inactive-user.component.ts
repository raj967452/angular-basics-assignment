import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStatusService } from '../services/user-status.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() users: string[];

  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor( private userStateService: UserStatusService) { }

  ngOnInit() {
    //  athis.users = this.userStateService.getInactiveUser();
  }

  toSetInactiveUser(id: number) {
    // this.userSetToInactive.emit(id);
    this.userStateService.onSetToInactive(id);
  }
}
