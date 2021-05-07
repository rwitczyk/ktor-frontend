import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {ChangePasswordDto} from '../models/ChangePasswordDto';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: any;
  changePasswordDto: ChangePasswordDto;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    this.changePasswordDto = new ChangePasswordDto();
    this.changePasswordDto.password = this.changePasswordForm.controls.password.value;
    this.usersService.changePassword(this.changePasswordDto).subscribe(() => {

    });
  }
}
