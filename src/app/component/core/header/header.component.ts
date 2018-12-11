import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  constructor(public authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }
  /*onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response) => {
      console.log(response);
    });
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
