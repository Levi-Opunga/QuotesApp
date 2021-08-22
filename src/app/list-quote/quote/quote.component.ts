import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../../models/quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote_details!: Quote ;
upVote(){
this.quote_details.up_vote = this.quote_details.up_vote+1;
}
downVote(){
  this.quote_details.down_vote= this.quote_details.down_vote +1;

}
  constructor() { }

  ngOnInit(): void {
  }

}
