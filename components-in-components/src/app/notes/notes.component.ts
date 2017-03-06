import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: `<h1>{{title}}</h1>`,
  styles: [`
  	h1{
	  	border: 1px solid black;
	  	margin-left: 10px;
	  	margin-right: 10px;
	  	padding: 10px 5px;
  	}
  `]
})
export class NotesComponent implements OnInit {
	title="This is the Notes Component!";
  constructor() { }

  ngOnInit() {
  }

}
