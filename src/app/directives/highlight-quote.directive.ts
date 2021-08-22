import {Directive, ElementRef, HostListener, Input, Renderer2, SimpleChanges} from '@angular/core';
import {Quote} from "../models/quote";

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  @Input() maxQuote!:Quote
  @Input() currentQuote!:Quote

  constructor(private el: ElementRef) {
    this.highlight()
  }

  @HostListener('change') ngOnChanges() {
    this.highlight();
  }
  highlight(){
    if(this.currentQuote==this.maxQuote){
      this.el.nativeElement.style.backgroundColor = "yellow";
    }else{
      this.el.nativeElement.style.backgroundColor = "white";
    }
  }

}
