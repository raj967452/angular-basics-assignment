import { Component, OnInit } from '@angular/core';
import { UserStatusService } from './services/user-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userStateService: UserStatusService) {}
  /*onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

  }
  onSetToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }*/
  ngOnInit() {
    this.activeUsers = this.userStateService.activeUsers;
    this.inactiveUsers = this.userStateService.inactiveUsers;
    console.table([this.activeUsers, this.inactiveUsers]);
  }
}
