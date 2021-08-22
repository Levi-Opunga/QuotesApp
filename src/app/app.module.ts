import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ListQuoteComponent } from './list-quote/list-quote.component';
import { QuoteComponent } from './list-quote/quote/quote.component';
import { QuoteDetailsComponent } from './list-quote/quote/quote-details/quote-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateQuoteComponent,
    ListQuoteComponent,
    QuoteComponent,
    QuoteDetailsComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
