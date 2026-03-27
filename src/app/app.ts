import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import{ UserService } from './services/user.service';
import { Admin, Moderator, RegularUser, SuperUser } from './models/user.types';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('usertype');
}
