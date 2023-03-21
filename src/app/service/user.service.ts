import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn:boolean = false;
  
  private _jsonURL = environment.API_URL + 'users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    console.log(this._jsonURL);
    return this.http.get<User[]>(this._jsonURL);
  }

  public postUser(newUser: User) {
    return this.http.post<any>(this._jsonURL, newUser)
  }
 
}
