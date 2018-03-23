import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppContactComponent} from 'app/app-contact/app-contact.component';
import {CounterComponent} from 'app/counter/counter.component'


// const appRoutes: Routes = [
//         { path: '', component: AppContactComponent },
//         { path: 'account', loadChildren: 'app/account/account.module#AccountModule' }
//       ];

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppContactComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: AppContactComponent },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
   // { path: 'account', loadChildren: () => AccountModule },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
      })
export class AppRoutingModule{ } 

