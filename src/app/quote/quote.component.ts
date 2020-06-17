import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Named must be your fear before banish it you can','John Nzola','Master Yoda',new Date(2020,6,17)),
    new Quote(2, 'We shall destroy the ones called the turtles who call themselves the turtles.','John Nzola','Krang',new Date(2020,6,17))
  ];

  deleteQuote(quoteDelete, index){
    if(quoteDelete){
      let toDelete = confirm('Are you sure you want to delete this quote?')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
