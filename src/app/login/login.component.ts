import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  private users:[] = [];

  private _jsonURL = 'assets/users.json';

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  constructor(private http: HttpClient, private router: Router){
    this.getJSON().subscribe(data => {
      this.users = data;
     });
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  login() {
    console.log(this.loginForm.value);
    
   
      const user = this.users.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if(user){
        alert("Login successfull");
      } else {
        alert("Wrong email or password");
      }
    
  }
}
