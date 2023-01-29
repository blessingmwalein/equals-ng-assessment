import { MenuItem } from './../../models/menu_item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-dinner',
  templateUrl: './create-dinner.component.html',
  styleUrls: ['./create-dinner.component.css']
})
export class CreateDinnerComponent implements OnInit {

  crateMenuForm!: FormGroup;
  menuItems :MenuItem[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.crateMenuForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
    })
  }

}
