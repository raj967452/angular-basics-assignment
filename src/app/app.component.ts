import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD5-UYlhCYIJGVmgXE0iyakyBAkflPOd5M',
  authDomain: 'recipeapp-8a7ab.firebaseapp.com',
  databaseURL: 'https://recipeapp-8a7ab.firebaseio.com',
  projectId: 'recipeapp-8a7ab',
  storageBucket: 'recipeapp-8a7ab.appspot.com',
  messagingSenderId: '786678511971'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp(config);
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
