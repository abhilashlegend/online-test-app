import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-test-app';
  loggedIn!:boolean;

  constructor(private uservice: UserService) { }
  
  ngOnInit(): void {
    this.loggedIn = this.uservice.loggedIn;  
  }
}
