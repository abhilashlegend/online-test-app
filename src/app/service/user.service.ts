import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn:boolean = false;
  
  private _jsonURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public postUser(newUser: User) {
    return this.http.post<any>(this._jsonURL, newUser)
  }
 
}
