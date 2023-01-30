import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //create register form
  userForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      shopBio: [''],
      shopName: ['', Validators.required],
      shopAddress: ['', Validators.required],
      role: [Role.Host]
    })
  }

  registerUser() {
    console.log('clicked');
    this.authService.registerUsers(this.userForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['login']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
