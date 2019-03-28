import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';


  constructor(private auth: AngularFireAuth) {}

  signUp() {
    this.auth.auth.createUserWithEmailAndPassword('testemail@gmail.com', 'testpassword');
  }

}
