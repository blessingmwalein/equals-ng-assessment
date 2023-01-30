import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menus/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menus: Menu[] = [];
  user!: User;
  constructor(private menuService: MenuService, private authService: AuthService) { }

  ngOnInit() {
    this.getUserMenus();
    this.user = this.authService.getUserFromLocalStorage();
  }

  getUserMenus() {
    this.menuService.getMenus().subscribe((menus) => {
      //find the menus that belong to the user
      this.menus = menus.filter((menu) => {
        return menu.hostId === this.user.id;
      })
    })
  }
}
