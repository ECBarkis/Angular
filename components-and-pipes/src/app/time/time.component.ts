import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `
  	<div>
	  	<h1>Time</h1>
	  	<h3>mediumTime - {{ date | date:'mediumTime' }}</h3>
	  	<h3>shortTime - {{ date | date:'shortTime' }}</h3>
	  	<h3>custom - {{ date | date:'H:m:s a z'}}</h3>
	  </div>
  `,
  styles: [`
  	div{
  	border: 1px solid black;
  	margin-top: 20px;
  	padding-left: 20px;
  	}
  `]
})
export class TimeComponent implements OnInit {
	date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
