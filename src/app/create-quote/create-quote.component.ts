import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Quote} from "../models/quote";

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  quote: Quote= new Quote();
  @Output() newQuoteEvent = new EventEmitter<Quote>();



  onCreate() {
   // this.ap.quotes.push(this.quote);
    this.newQuoteEvent.emit(this.quote)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
