import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `<h1>{{title}}</h1>`,
  styles: [`
  	h1{
  		border: 1px solid green;
  		margin: 10px 10px;
  		padding: 10px 5px;
  	}
  `]
})
export class TasksComponent implements OnInit {
	title="This is the Tasks Component!";
  constructor() { }

  ngOnInit() {
  }

}
