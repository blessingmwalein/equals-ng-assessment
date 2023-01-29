import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDinnerComponent } from './create-dinner/create-dinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'dinners',
    component:MenusComponent
  },
  {
    path: 'dinners/create',
    component:CreateDinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
