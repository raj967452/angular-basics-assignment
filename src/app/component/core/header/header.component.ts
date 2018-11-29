import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  /*onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/
  onLogout() {
    this.authService.logout();
  }
}
