import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
 import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
    
  ],
  declarations: [LoginFormComponent]
})
export class AuthenticationModule { }
