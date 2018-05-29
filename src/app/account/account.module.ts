import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing }  from './account-routing';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule } from 'app/Shared/shared.modules';
import { RegisterService } from 'app/account/registration-form/register.service';
@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule    ,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent
  ],
  providers:[RegisterService]
})
export class AccountModule { }
