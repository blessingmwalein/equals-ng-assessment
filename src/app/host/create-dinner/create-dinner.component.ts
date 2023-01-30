import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menus/menu.service';
import { MenuItem } from './../../models/menu_item';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dinner',
  templateUrl: './create-dinner.component.html',
  styleUrls: ['./create-dinner.component.css']
})
export class CreateDinnerComponent implements OnInit {

  crateMenuForm!: FormGroup;
  submited = false;

  // menuItems :MenuItem[] = [];
  constructor(private fb: FormBuilder, private menuService: MenuService, private router: Router, private authService:AuthService) { }

  ngOnInit() {
    this.crateMenuForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      image: ['dinner2.png', Validators.required],
      hostId: this.authService.getUserFromLocalStorage().id,
      menuItems: this.fb.array([

      ])
    })
  }

  addMenuItem() {
    const menuItem = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      image: ['dinner2.png', Validators.required]
    });

    this.menuItems.push(menuItem);
  }

  deleteMenuItem(index: number) {
    this.menuItems.removeAt(index);
  }
  get menuItems() {
    return this.crateMenuForm.controls["menuItems"] as FormArray;
  }


  submitForm() {
    console.log(this.crateMenuForm.value);
    this.submited = true;
    if (this.crateMenuForm.invalid) {
      return;
    }
    this.menuService.registerMenus(this.crateMenuForm.value).subscribe((menu) => {
      console.log(menu);
      this.router.navigate(['host/dinners']);
    }
    )
  }
}
