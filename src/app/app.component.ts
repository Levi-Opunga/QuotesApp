import {Component} from '@angular/core';
import {Quote} from "./models/quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotetaker';

  quotes: Quote[] = [
    {
      author: 'Graham Bell',
      created_by: 'levi',
      quote: 'all is well that ends well',
      created_at: '19/6/2007',
      up_vote: 0,
      down_vote: 0,
      title: 'wisdom'
    },
    {
      author: "Alex Moran",
      created_by: "joe",
      quote: "never give up",
      created_at: '34/5/2668',
      up_vote: 0,
      down_vote: 0,
      title: 'encourage'
    }

  ];
  addedNewQuote: boolean = false;

  addNewQuote(quote: Quote) {
    this.quotes.push(quote);
    this.addedNewQuote = false;
  }
  deleteQuote :boolean = false;

  deletedQuote(quote:Quote){
    this.quotes.push(quote);
    this.deleteQuote = true
  }



  appear() {
    this.addedNewQuote = true;
  }
}
