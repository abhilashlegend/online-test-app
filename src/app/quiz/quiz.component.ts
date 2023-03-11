import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private _quizUrl = '/assets/test.json';

  constructor(private http: HttpClient){}

  public test:[] = [];

  public currentQue:number = 0;

  ngOnInit(): void {
    this.getJSON().subscribe(res => {
      this.test = res;
      console.log(this.test);
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._quizUrl);
  }



}
