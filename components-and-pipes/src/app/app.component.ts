import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<div>
	  	<app-currencies></app-currencies>
	  	<app-dates></app-dates>
	  	<app-time></app-time>
	  	<app-datetime></app-datetime>
	  </div>
  `,
  styles: [`
  	div{
  		width: 970px;
  		margin: 10px auto;
  		border: 1px solid black;
  		padding: 20px;
  	}
  `]
})
export class AppComponent {
  title = 'app works!';
}
