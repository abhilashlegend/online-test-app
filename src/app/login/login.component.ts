import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  
  constructor(private http: HttpClient, private router: Router, private uservice: UserService){ }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  login() {
    let hasUser:boolean;
    this.uservice.getUsers().subscribe(res => {
      
      res.find((a:any) => {
        hasUser = a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(hasUser){
        alert("Login successfull");
        this.router.navigate(["dashboard"]);
        this.uservice.loggedIn = true;
      } else {
        alert("Wrong email or password");
      }  
    }, err => {
      console.log("Error: " + err)
    });
    
  }
}
