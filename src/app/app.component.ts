import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, quote:'Named must be your fear before banish it you can'},
    {id:2, quote:'We shall destroy the ones called the turtles who call themselves the turtles.'}
  ];
}
