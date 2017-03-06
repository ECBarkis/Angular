import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  template: `
  	<div>
	  	<h1>Date Formats</h1>
	  	<h3>date - {{ date | date }}</h3>
	  	<h3>fullDate - {{ date | date:'fullDate' }}</h3>
	  	<h3>longDate - {{ date | date:'longDate' }}</h3>
	  	<h3>mediumDate - {{ date | date:'mediumDate' }}</h3>
	  	<h3>shortDate - {{ date | date:'shortDate' }}</h3>
	  	<h3>custom - {{ date | date:'yMd' }}</h3>
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
export class DatesComponent implements OnInit {
	date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
