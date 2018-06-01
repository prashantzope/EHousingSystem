import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from 'app/Shared/model/Credentials.Interface';
import { debug } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;  
  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
 
  //constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute) { }

  constructor(private router:Router){
    
  }

    ngOnInit() {            
      this.errors = '';
    // subscribe to router event
    // this.subscription = this.activatedRoute.queryParams.subscribe(
    //   (param: any) => {
    //      this.brandNew = param['brandNew'];   
    //      this.credentials.email = param['email'];         
    //   });      
  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    //this.subscription.unsubscribe();
  }

  // login({ value, valid }: { value: Credentials, valid: boolean }) {
  //   this.submitted = true;
  //   this.isRequesting = true;
  //   this.errors='';
  //   if (valid) {
  //     this.userService.login(value.email, value.password)
  //       .finally(() => this.isRequesting = false)
  //       .subscribe(
  //       result => {         
  //         if (result) {
  //            this.router.navigate(['/dashboard/home']);             
  //         }
  //       },
  //       error => this.errors = error);
  //   }
  // }

  loginUser(s){    
    console.log(s); 
  }

  naviagteToRegister(){
  //  this.router.navigateByUrl("/register");
  this.router.navigate(['/account/register']);   
  }
}
