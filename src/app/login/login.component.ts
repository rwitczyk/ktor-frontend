import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginUserDto} from '../models/LoginUserDto';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: any;
  loginUserDto: LoginUserDto;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.signInForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.signInForm.controls;
  }

  sendForm(): void {
    this.loginUserDto = new LoginUserDto();
    this.loginUserDto.login = this.signInForm.controls.login.value;
    this.loginUserDto.password = this.signInForm.controls.password.value;

    this.usersService.login(this.loginUserDto).subscribe(value => {
      console.log(value);
      // @ts-ignore
      sessionStorage.setItem('userId', value.userId);
      this.router.navigate(['home']);
    });
  }
}
