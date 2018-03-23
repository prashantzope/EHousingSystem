import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RegistrationFormComponent }    from './registration-form/registration-form.component';
import { LoginFormComponent }    from './login-form/login-form.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent},
  
]);
