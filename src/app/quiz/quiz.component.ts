import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

quizform: any = {}

public selectedOptionClass:string = '';

public status: boolean = false;

  private _quizUrl = '/assets/test.json';

  constructor(private http: HttpClient, private tservice: TestService, private router:Router){}

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

  public onSelectOptionHandler(e:any) {
   this.selectedOptionClass = e.target.value;
   if(e.target.value === this.test[this.currentQue]["answer"]){
    this.tservice.score++;
   }
   console.log(this.tservice.score);
  }

  nextQuestionHandler() {
    if(this.currentQue < this.test.length){
      this.currentQue++
    }
  }

  quitQuizHandler() {
    this.router.navigate(["result"]);
  }

  prevQuestionHandler() {
    if(this.currentQue > 0){
      this.currentQue--;
    }
  }

}
