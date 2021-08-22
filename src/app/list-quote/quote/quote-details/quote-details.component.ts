import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from "../../../models/quote";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Output() itIsDeleted = new EventEmitter<Quote>();
  @Output() upVoted = new EventEmitter<Quote>();


  @Input() quote_details!: Quote;

  delete() {
    this.itIsDeleted.emit(this.quote_details)
  }

  upVote() {
    this.upVoted.emit(this.quote_details)
  }

  downVote() {
    this.quote_details.down_vote = this.quote_details.down_vote + 1;

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
