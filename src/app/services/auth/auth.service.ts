import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getUser(id: number) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  registerUsers(payload: User) {
    return this.http.post<User>('http://localhost:3000/users', payload);
  }

  signOut() {
    localStorage.removeItem('user');
    location.reload();
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
