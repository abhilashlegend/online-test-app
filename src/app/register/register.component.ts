import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  private _users:Array<User> = [];

  constructor(private http: HttpClient, private router: Router, private uservice: UserService){ }

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

    this.uservice.getUsers().subscribe(data => {
      this._users = data;
    })
  }  

  confirmPasswordValidator(g: any){
    return g.get('password')?.value === g.get('confirmpassword')?.value ? null : {'mismatch': true}
  }

  onSubmit() {

    let maxId;
    
    if(Array.isArray(this._users)){
      maxId = Math.max(...this._users.map(user => user.id));
    } else {
      if(this._users["email"] === this.registerForm.value.email){
        alert("User already exists");
        return;
      }
      maxId = this._users["id"] + 1
    }
  
    delete this.registerForm.value.confirmpassword
      
    const newUser = {
      id: maxId + 1,
      score: 0,
      ...this.registerForm.value
    } 
    
    this.uservice.postUser(newUser)
    .subscribe(res => {
      alert("registration successfull");
      this.registerForm.reset();
      this.router.navigate(['']);
    }, error => {
      alert("Something went wrong");
      console.log(error);
    })
  }
}
