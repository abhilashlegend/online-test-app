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
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  private _jsonURL = 'assets/users.json';
  private _users:User[] = [];

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
  }  

  confirmPasswordValidator(g: any){
    return g.get('password')?.value === g.get('confirmpassword')?.value ? null : {'mismatch': true}
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  onSubmit() {
 
    let maxId = Math.max(...this._users.map(user => user.id));

    delete this.registerForm.value.confirmpassword
      
    const newUser = {
      id: maxId + 1,
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
    console.log(maxId);
  }
}
