import { Menu } from './../../models/menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menus/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  menus:Menu[] = [];
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe((menus) => {
      this.menus = menus;
    })
  }

}
