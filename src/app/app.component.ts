import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth'

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
  private user: Observable<firebase.User>;
  ngOnInit() {
    // firebase.initializeApp(config);
    const test = firebase.initializeApp(config);
    console.log('test-------------------------------', test);
    // .then(rsp => {console.log("rsp:---", rsp);}).catch(err => { console.error('err----', err)})
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
