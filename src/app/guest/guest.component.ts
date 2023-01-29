import { User } from 'src/app/models/user';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {
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
