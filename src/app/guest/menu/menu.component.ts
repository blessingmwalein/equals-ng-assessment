import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menus/menu.service';
import { Menu } from 'src/app/models/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu!: Menu;
  loading: boolean = true;
  userForm!: FormGroup;
  menuTotal:number = 0;

  constructor(private menuService: MenuService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.getMenu();
    this.userForm = this.fb.group({
      number_of_people: [0, [Validators.required]],
    })
  }


  getMenu() {
    this.menuService.getMenu(this.route.snapshot.paramMap.get('id')).subscribe((menu) => {
      console.log(menu);
      this.menu = menu;
      this.loading = false;
    })
  }

  calcMenuTotal(){
    console.log(this.userForm.value.number_of_people);
    this.menuTotal = Math.round((this.menu.price * this.userForm.value.number_of_people) * 100) / 100;
  }
}
