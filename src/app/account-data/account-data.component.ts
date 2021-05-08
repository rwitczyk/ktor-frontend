import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {AccountUserDataDto} from '../models/AccountUserDataDto';
import {UpdateAccountDataDto} from '../models/UpdateAccountDataDto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {
  accountDataForm: any;
  accountData: AccountUserDataDto;
  updateAccountData: UpdateAccountDataDto;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private toastr: ToastrService) {
    this.accountDataForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.usersService.getAccountData().subscribe(value => {
      this.accountData = value;
      console.log(this.accountData);
    });
  }

  sendForm(): void {
    this.updateAccountData = new UpdateAccountDataDto();
    this.updateAccountData.firstName = this.accountDataForm.controls.firstName.value;
    this.updateAccountData.lastName = this.accountDataForm.controls.lastName.value;
    this.updateAccountData.age = this.accountDataForm.controls.age.value;
    this.usersService.updateAccountData(this.updateAccountData).subscribe(() => {
      this.toastr.success('Dane zostaly zaktualizowane!');
    });
  }
}
