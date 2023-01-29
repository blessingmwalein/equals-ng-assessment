import { HostComponent } from './host/host.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    component:GuestComponent,
    loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule)
  },
  {
    path: 'host',
    component:HostComponent,
    loadChildren: () => import('./host/host.module').then(m => m.HostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
