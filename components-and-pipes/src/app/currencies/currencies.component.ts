import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  template: `
  	<div>
	  	<h1>Currency Formats</h1>
	  	<h3>USD (no fromat) - {{ amount }}</h3>
	  	<h3>USD (currency format) - {{amount | currency:'USD'}}</h3>
	  	<h3>ASU (currency 1.2 format = 2 dec values) - {{amount | currency:'AUS':ASU}}</h3>
	  	<h3>CNY (1.0 = 0 dec values if any are present) - {{amount | currency:'CNY':true:'1.0'}}</h3>
	  </div>
  `,
  styles: [`
  	div{
  		border: 1px solid black;
  		padding-left: 20px;
  	}
  `]
})
export class CurrenciesComponent implements OnInit {
	amount = 140967.30;
  constructor() { }

  ngOnInit() {
  }

}
