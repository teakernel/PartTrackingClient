import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  user?: User | null;

  constructor(private userService: UserService){
    this.userService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.userService.logout();
  }
}
