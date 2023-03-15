import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  qualification: string;
  password: string;
  score: number;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  private _jsonURL = 'http://localhost:3000/users';
  private _users:Array<User> = [];

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

    this.getJSON().subscribe(data => {
      this._users = data;
     });

    console.log(this._users);
  }  

  confirmPasswordValidator(g: any){
    return g.get('password')?.value === g.get('confirmpassword')?.value ? null : {'mismatch': true}
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
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

    console.log(maxId);
   
  
    delete this.registerForm.value.confirmpassword
      
    const newUser = {
      id: maxId + 1,
      score: 0,
      ...this.registerForm.value
    }

    

    this.http.post<any>("http://localhost:3000/users", newUser)
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
