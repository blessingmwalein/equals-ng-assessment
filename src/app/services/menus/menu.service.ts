import { Menu } from './../../models/menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.get<Menu[]>('http://localhost:3000/menus');
  }

  getMenu(id: any) {
    return this.http.get<Menu>(`http://localhost:3000/menus/${id}`);
  }

  registerMenus(payload: Menu) {
    return this.http.post<Menu>('http://localhost:3000/menus', payload);
  }

  updateMenu(id: number, payload: Menu) {
    return this.http.put<Menu>(`http://localhost:3000/menus/${id}`, payload);
  }

  deleteMenu(id: number) {
    return this.http.delete<Menu>(`http://localhost:3000/menus/${id}`);
  }



}
