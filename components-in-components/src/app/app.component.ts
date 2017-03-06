import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<div>
	  	<h1>{{title}}</h1>
	  	<app-time></app-time>
	  	<app-notes></app-notes>
	  	<app-tasks></app-tasks>
	  </div>
  `,
  styles: [`
  	div{
  		border: 1px solid red;
  		padding: 10px 5px;
  		width: 970px;
  		margin: 0px auto;
  	}`]
})

export class AppComponent {
  title = 'This is the App Components!';
}
