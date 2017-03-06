import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `<h1>{{title}}</h1>`,
  styles: [`
  	h1{
  		border: 1px solid blue;
  		padding: 10px 5px;
  		margin: 0px 10px;
  	}
  `]
})
export class TimeComponent implements OnInit {
	title="This is the Time Component!";
  constructor() { }

  ngOnInit() {
  }

}
