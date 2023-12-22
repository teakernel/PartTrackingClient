import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})

export class UserListComponent {

  userList?: User[];
  currentUser: User = {};
  currentIndex = -1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.userList = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  setActiveItem(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
}