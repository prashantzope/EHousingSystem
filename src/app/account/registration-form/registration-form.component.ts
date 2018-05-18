import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'util';
import { RegisterService } from 'app/account/registration-form/register.service';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  form : FormGroup;
  registerDetails: any = {} 
 errors: string;  
 isRequesting: boolean;
 submitted: boolean = false;

 
  constructor(private router: Router,private registerService:RegisterService) { 
   
  }

  ngOnInit() {
          
  }


  naviagteToLogin(){    
    this.router.navigate(['/account/login']);  

  }

  signupUser(register){

    this.registerDetails = {
     FirstName : register.value.name,
     Email: register.value.email,
     UserName:register.value.userName,
     Password:register.value.password,
     ConfirmPassword:register.value.confirmPassword
    } 

    //this.registerService.registerUser(this.registerDetails);

    this.registerService.registerUser(this.registerDetails).subscribe(
        datas =>   {
          debugger
          this.router.navigate(['/account/login']);  
      },
    
    errors => {
      debugger
      alert(errors);
    } );
    
  }
  // registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
  //    this.submitted = true;
  //    this.isRequesting = true;
  //    this.errors='';
  //    if(valid)
  //    {
  //        this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location)
  //                  .finally(() => this.isRequesting = false)
  //                  .subscribe(
  //                    result  => {if(result){
  //                        this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
  //                    }},
  //                    errors =>  this.errors = errors);
  //    }      
  // }  
}
