import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppContactComponent} from 'app/app-contact/app-contact.component';
import {CounterComponent} from 'app/counter/counter.component'


// const appRoutes: Routes = [
//         { path: '', component: AppContactComponent },
//         { path: 'account', loadChildren: 'app/account/account.module#AccountModule' }
//       ];

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: 'account/login', component: AppContactComponent },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
    // { path: 'counter', component: CounterComponent },
    // { path: 'fetch-data', component: AppContactComponent },
    // { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
   // { path: 'account', loadChildren: () => AccountModule },
    { path: '**', redirectTo: 'account' }
];

@NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
      })
export class AppRoutingModule{ } 

