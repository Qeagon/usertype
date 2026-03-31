import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserService } from './services/user.service';
import { Admin, Moderator, RegularUser, SuperUser } from './models/user.types';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [UserService]
})
export class App implements OnInit {
  protected readonly title = signal('usertype');


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    const admin: Admin = {
      name: 'alice',
      email: 'alice@example.com',
      createUser: (user) => console.log(' -> User made')
    };

    const moderator: Moderator = {
      name: 'Bob',
      email: 'bob@example.com',
      banUser: (user) => console.log('  → User banned', user)
    };

    const regularUser: RegularUser = {
      name: 'Charlie',
      email: 'charlie@example.com',
      viewContent: () => console.log('  → User online')
    };

    const superUser: SuperUser = {
      name: 'Diana',
      email: 'diana@example.com',
      createUser: (user) => console.log('  → SuperUser made user', user),
      banUser: (user) => console.log('  → SuperUser banned user', user)
    };

    console.log('--- performAdminTask ---');
    this.userService.performAdminTask(admin, () => console.log(' -> Made a database backup'));

    this.userService.performAdminTask(regularUser, () => console.log('  → not allowed!'));

    console.log('--- moderateContent ---');
    this.userService.moderateContent(moderator, 'post-42');
    this.userService.moderateContent(admin, 'post-99');

    console.log('--- viewContentAsUser ---');
    this.userService.viewContentAsUser(regularUser);
    this.userService.viewContentAsUser(moderator);

    console.log('--- superUserTask ---');
    this.userService.superUserTask(superUser, () => console.log('  → SuperUser task complete!'));
  
  }
}
