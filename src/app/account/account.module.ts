import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing }  from './account-routing';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from 'app/Shared/shared.modules';
@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule    ,
    SharedModule
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent
  ]
})
export class AccountModule { }
