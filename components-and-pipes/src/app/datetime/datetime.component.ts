import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  template: `
  	<div>
	  	<h1>DateTime Formats</h1>
	  	<h3>medium - {{ date | date:'medium' }}</h3>
	  	<h3>short - {{ date | date:'short' }}</h3>
	  	<h3>custom - {{ date | date:'yMd H:m:s a z'}}</h3>
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
export class DatetimeComponent implements OnInit {
	date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
