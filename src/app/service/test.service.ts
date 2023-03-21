import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public score:number = 0;

  private _ApiUrl = environment.API_URL + 'test';

  constructor(private http: HttpClient) { }

  getTest():Observable<any> {
    return this.http.get(this._ApiUrl);
  }
}
