import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Named must be your fear before banish it you can','We shall destroy the ones called the turtles who call themselves the turtles.' ]
  }
}
