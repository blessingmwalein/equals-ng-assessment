import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GuestComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GuestModule { }
