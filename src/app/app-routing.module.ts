import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RegisterAccountComponent} from './register-account/register-account.component';
import {LoginComponent} from './login/login.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {AccountDataComponent} from './account-data/account-data.component';
import {UserThingsComponent} from './user-things/user-things.component';
import {ThingDetailsComponent} from './thing-details/thing-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registerAccount', component: RegisterAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editPassword', component: ChangePasswordComponent},
  {path: 'accountData', component: AccountDataComponent},
  {path: 'userThingsList', component: UserThingsComponent},
  {path: 'thingDetails/:name', component: ThingDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
