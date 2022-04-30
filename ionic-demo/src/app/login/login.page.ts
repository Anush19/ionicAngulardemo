import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  }
  constructor(private readonly router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async registerNewUser() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log('The user is ', user);
    if(user.user.email){
      alert('successful login');
    }else{
      alert('registration unsuccessful');
    }
  }
  async login() {
    //validate creds TODO
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log('The user is ', user);
    if(user.user.email){
      this.router.navigate(['/home'])
    }else{
      alert('login unsuccessful');
    }
  }
}
