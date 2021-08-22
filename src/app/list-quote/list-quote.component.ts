import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from "../models/quote";

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {
  @Input() quotes!: any;
  @Input() maxVotedQuote!: Quote;
  @Output() itIsDeleted = new EventEmitter<Quote>();
  @Output() upVoted = new EventEmitter<Quote>();

  constructor() {
  }

  ngOnInit(): void {
  }

  passedUp(quote: Quote) {
    this.upVoted.emit(quote)
  }

  quoteDeleted(quote: Quote) {

    this.itIsDeleted.emit(quote)
  }

}
