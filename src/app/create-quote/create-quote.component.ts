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
    this.quote.created_at = Date.now()

    this.newQuoteEvent.emit(this.quote)
    this.quote =new Quote();

  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
