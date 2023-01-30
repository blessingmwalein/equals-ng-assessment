import { Routes } from '@angular/router';
import { Alert } from './../../models/error';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //create register form
  userForm!: FormGroup;
  alert!: Alert;
  submited = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  loginUser() {
    console.log('clicked');
    this.submited = true;
    if (this.userForm.invalid) {
      this.alert = {
        type: 'error',
        message: 'Check your email and password and try again'
      }
      return;
    }

    this.authService.getUsers().subscribe((users) => {
      var user = users.find((user) => {
        return user.email === this.userForm.value.email && user.password === this.userForm.value.password;
      });
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
    this.submited = false;

        this.alert = {
          type: 'error',
          message: 'Invalid email or password'
        }
      }
    })
  }
}
