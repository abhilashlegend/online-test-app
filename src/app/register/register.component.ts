import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private http: HttpClient, private router: Router){

  }

  ngOnInit():void{
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'qualification': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmpassword': new FormControl(null, [Validators.required, Validators.minLength(6)])
    }, { validators: this.confirmPasswordValidator})

   
  }  

  confirmPasswordValidator(g: any){
    return g.get('password')?.value === g.get('confirmpassword')?.value ? null : {'mismatch': true}
  }

  onSubmit() {

    console.log(this.registerForm.hasError('mismatch'));
  }
}
