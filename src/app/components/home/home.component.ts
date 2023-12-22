import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  user!: User | null;
  
  constructor(private userService: UserService) {
    this.user = this.userService.userValue;
  }
}
