import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!:string;
  password!: string;
  message!: string;

  constructor(private userService: UserService){}

  onSubmit() {
    this.userService.login(this.email, this.password)
      .subscribe({ 
        next: (data) => { console.log(data); this.message = 'Login successful!' }, 
        error: (e) => { console.error(e); this.message = 'Login failure.' } });
  }
}
