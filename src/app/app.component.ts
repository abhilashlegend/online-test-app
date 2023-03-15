import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'online-test-app';
  loggedIn:boolean  = false;

  constructor(private uservice: UserService) { }

  ngDoCheck():void {
    this.loggedIn = this.uservice.loggedIn;
  }
  
}
