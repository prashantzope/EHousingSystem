import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'util';
import { RegisterService } from 'app/account/registration-form/register.service';
import {FormGroup,FormControl,Validators,FormBuilder,AbstractControl } from '@angular/forms';
import { Registration } from 'app/Shared/model/Registration.Interface';
import { validateConfig } from '@angular/router/src/config';
import { FormError } from 'app/Shared/model/FormError';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


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
 
  constructor(private router: Router,private registerService:RegisterService,private fb:FormBuilder
    ,public toastr: ToastsManager, vcr: ViewContainerRef)
  {  
    
    this.toastr.setRootViewContainerRef(vcr);
  }

  // Initialize form
createForm(){
  this.signupForm = this.fb.group({
    FirstName : [null,Validators.required],
    lastName:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    confirmPassword:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    mobileNumber:new FormControl(null,Validators.required),
    userName:new FormControl(null,Validators.required)
  });
}
 // Init method
  ngOnInit() 
  {
    this.createForm() ;
  }


  // Navigate to login
  naviagteToLogin(){    
    this.router.navigate(['/account/login']);  

  }

  // Sign up user
  signupUser(){
    this.register   =  this.signupForm;  

    if(this.signupForm.valid){

        this.registerService.registerUser(this.register.value).subscribe(
          datas =>   {          
            this.toastr.success(datas)
            this.signupForm.reset();
           //  this.router.navigate(['/account/login']);  
             
            },    
        errors => {this.handleSubmitError(errors) 
          this.toastr.error("Please check highlighted error")
        }
        
        );
    }else{    
        this.validateAllFormFields(this.signupForm);  
    }    
  }


  // error handling
  protected handleSubmitError(error: any) {      
      const data = error.json();
      const fields = Object.keys(data || {});
      fields.forEach((field) => {
        
        const control = this.findFieldControl(field);
        const errors = this.fetchFieldErrors(data, field);
        control.setErrors(errors);
      });
   
  }

  protected getErrors(control: AbstractControl): FormError[] {
    return Object.keys(control.errors)
      .filter((error) => control.errors[error])
      .map((error) => {
        let params = control.errors[error];
        return {
          error: error,
          params: params === true || params == {} ? null : params
        };
      });
  }

  protected findFieldControl(field: string): AbstractControl {
    let control: AbstractControl;
    if (field === 'base') {
      control = this.signupForm;
    } else if (this.signupForm.contains(field)) {
      control = this.signupForm.get(field);
    } else if (field.match(/_id$/) && this.signupForm.contains(field.substring(0, field.length - 3))) {
      control = this.signupForm.get(field.substring(0, field.length - 3));
    } else if (field.indexOf('.') > 0) {
      let group = this.signupForm;
      field.split('.').forEach((f) => {
        if (group.contains(f)) {
          control = group.get(f);
          if (control instanceof FormGroup) group = control;
        } else {
          control = group;
        }
      })
    } else {
      // Field is not defined in form but there is a validation error for it, set it globally
      control = this.signupForm;
    }
    return control;
  }

  private fetchFieldErrors(data: any, field: string): any {
    const errors = {};
    data[field].forEach((e) => {
      let name: string = e.error;
      delete e.error;
      errors[name] = e;
    });
    return errors;
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
}
