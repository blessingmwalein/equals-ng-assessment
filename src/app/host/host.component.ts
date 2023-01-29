import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  showMenu: boolean = false;
  title = 'equals-ng-assessment';
  isLoggedIn: boolean = false;
  user:User = {} as User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());

    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      this.user = this.authService.getUserFromLocalStorage();
    }

  }

  signOut() {
    this.authService.signOut();
  }

}
