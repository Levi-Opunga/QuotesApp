import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../models/quote";

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {
 @Input() quotes!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
