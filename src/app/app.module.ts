import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ListQuoteComponent } from './list-quote/list-quote.component';
import { QuoteComponent } from './list-quote/quote/quote.component';
import { QuoteDetailsComponent } from './list-quote/quote/quote-details/quote-details.component';
import{FormsModule} from "@angular/forms";
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { HeaderComponent } from './header/header.component';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuoteComponent,
    ListQuoteComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    CustomDatePipe,
    HeaderComponent,
    HighlightQuoteDirective,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
