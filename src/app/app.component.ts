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
      author: 'Tim Berners-Lee',
      created_by: 'Levi Opunga',
      quote: 'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
      created_at: Date.now(),
      up_vote: 0,
      down_vote: 0,
      title: 'The Web'
    },
    {
      author: "Alex Moran",
      created_by: "Levi Opunga",
      quote: "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it",
      created_at: Date.now(),
      up_vote: 0,
      down_vote: 0,
      title: 'Future of Technology'
    }

  ];
  addedNewQuote: boolean = false;
  maxVotedQuote!: Quote;

  addNewQuote(quote: Quote) {
    this.quotes.push(quote);
    this.addedNewQuote = false;
  }

  upVoteQuote(quote: Quote) {
    const index = this.quotes.indexOf(quote, 0);
    if (index > -1) {
      this.quotes[index].up_vote++;
      this.maxVotedQuote = this.quotes.reduce(function(prev, current) {
        return (prev.up_vote > current.up_vote) ? prev : current
      })
      console.log("maxvoted quote", this.maxVotedQuote.title)
    }
  }

  deletedQuote(quote: Quote) {
    const index = this.quotes.indexOf(quote, 0);
    if (index > -1) {
      this.quotes.splice(index, 1);
    }
  }




  appear() {
    this.addedNewQuote = true;
  }
}
