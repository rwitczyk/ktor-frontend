import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserDto} from '../models/RegisterUserDto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginUserDto} from '../models/LoginUserDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  registerAccount(account: RegisterUserDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/users', account);
  }

  login(loginDto: LoginUserDto): Observable<void> {
    return this.http.post<void>(environment.backendUrl + '/login', loginDto);
  }
}
