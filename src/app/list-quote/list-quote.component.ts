import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from "../models/quote";

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {
 @Input() quotes!: any;
 @Output() itIsDeleted = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  quoteDeleted(quote:Quote){
    this.itIsDeleted.emit(quote)
  }

}
