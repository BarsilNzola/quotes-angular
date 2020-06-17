import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, quote:'Named must be your fear before banish it you can', author:'John Nzola', publisher:'Master Yoda'},
    {id:2, quote:'We shall destroy the ones called the turtles who call themselves the turtles.', author: 'John Nzola', publisher: 'Krang'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
