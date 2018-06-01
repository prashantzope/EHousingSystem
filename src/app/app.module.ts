import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import {  AppRoutingModule }  from './app-routing.module';
import { CounterComponent } from './counter/counter.component';
import { NavComponent } from 'app/nav/nav.component';
import { SharedModule } from 'app/Shared/shared.modules';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AppContactComponent,
    CounterComponent,
    NavComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
     ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
