import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menus/menu.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus:Menu[] = [];
  user!:User;
  constructor(private menuService:MenuService, private authService:AuthService) { }

  ngOnInit() {
    this.getUserMenus();
    this.user  = this.authService.getUserFromLocalStorage();
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
