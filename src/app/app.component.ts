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
      up_vote: 2,
      down_vote: 3,
      title: 'wisdom'
    },
    {
      author: "Alex Moran",
      created_by: "joe",
      quote: "never give up",
      created_at: '34/5/2668',
      up_vote: 5,
      down_vote: 3,
      title: 'encourage'
    }

  ];


}
