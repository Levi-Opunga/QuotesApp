import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from "../../models/quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() itIsDeleted = new EventEmitter<Quote>();
  @Input() quote_details!: Quote;
  details: boolean = false;

  showDetails(){
    this.details = true;
  }

  quoteDeleted(quote:Quote){
    this.itIsDeleted.emit(quote)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
