import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {RegisterUserDto} from '../models/RegisterUserDto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  registerForm: any;
  user: RegisterUserDto;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private toastr: ToastrService) {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.user = new RegisterUserDto();
    this.user.login = this.registerForm.controls.login.value;
    this.user.password = this.registerForm.controls.password.value;
    this.user.firstName = this.registerForm.controls.firstName.value;
    this.user.lastName = this.registerForm.controls.lastName.value;
    this.user.age = this.registerForm.controls.age.value;
    this.usersService.registerAccount(this.user).subscribe(() => {
      this.toastr.success('Konto zostalo utworzone');
    }, error => {
      this.toastr.error('Login juz istnieje lub za slabe haslo!');
    });
  }
}
