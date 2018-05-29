import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'util';
import { RegisterService } from 'app/account/registration-form/register.service';
import {FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Registration } from 'app/Shared/model/Registration.Interface';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
signupForm : FormGroup;  
errors: string;  
isRequesting: boolean;
submitted: boolean = false;
registrationForm : Registration;
register: any;
 
  constructor(private router: Router,private registerService:RegisterService,private fb:FormBuilder)
  {  
    
    
  }

createForm(){
  this.signupForm = this.fb.group({
    firstName : [null,Validators.required],
    lastName:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    confirmPassword:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    mobileNumber:new FormControl(null,Validators.required),
    userName:new FormControl(null,Validators.required)
  });
}

  ngOnInit() 
  {
    this.createForm() ;
  }


  naviagteToLogin(){    
    this.router.navigate(['/account/login']);  

  }

  signupUser(){
    this.register   =  this.signupForm;
    // this.registrationForm = {
   
    //   FirstName :   register.value.firstName,
    //   LastName :  register.value.lastName,
    //   Email: register.value.email,
    //   UserName:register.value.userName,
    //   PassWord:register.value.password,
    //   ConfirmPassword:register.value.confirmPassword,
    //   MobileNumber: register.value.mobileNumber
    // }     

    if(this.signupForm.valid){
        this.registerService.registerUser(this.registrationForm).subscribe(
          datas =>   {          
            this.router.navigate(['/account/login']);  
        },
    
        errors => {      
          alert(errors);
        } );
    }else{    
      this.validateAllFormFields(this.signupForm);  
    }
    console.log(this.signupForm.value)
  }

  isFieldValid(field: string) {
    return !this.signupForm.get(field).valid && this.signupForm.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
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
