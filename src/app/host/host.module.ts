import { MenusComponent } from './menus/menus.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostComponent } from './host.component';
import { CreateDinnerComponent } from './create-dinner/create-dinner.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HostComponent,
    MenusComponent,
    CreateDinnerComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
