import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  public score!:number;

  constructor(private tservice: TestService){
  }

  ngOnInit() {
    this.score = this.tservice.score;
  }
}
