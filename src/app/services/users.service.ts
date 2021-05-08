import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserDto} from '../models/RegisterUserDto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginUserDto} from '../models/LoginUserDto';
import {ChangePasswordDto} from '../models/ChangePasswordDto';
import {AccountUserDataDto} from '../models/AccountUserDataDto';
import {UpdateAccountDataDto} from '../models/UpdateAccountDataDto';
import {ThingDataDto} from '../models/ThingDataDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  registerAccount(account: RegisterUserDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/users', account);
  }

  login(loginDto: LoginUserDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/login', loginDto);
  }

  changePassword(changePasswordDto: ChangePasswordDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/editPassword/' + sessionStorage.getItem('userId'), changePasswordDto);
  }

  getAccountData(): Observable<AccountUserDataDto> {
    return this.http.get<AccountUserDataDto>(environment.backendUrl + '/users/' + sessionStorage.getItem('userId'));
  }

  updateAccountData(accountData: UpdateAccountDataDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/users/' + sessionStorage.getItem('userId'), accountData);
  }

  getAllUserThings(): Observable<ThingDataDto[]> {
    return this.http.get<ThingDataDto[]>(environment.backendUrl + '/things/' + sessionStorage.getItem('userId'));
  }
}
