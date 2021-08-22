import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../../models/quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote_details!: Quote;
  details: boolean = false;

  showDetails(){
    this.details = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
