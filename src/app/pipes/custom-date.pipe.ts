import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe } from '@angular/common'
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: number) {
    const datePipe = new DatePipe("en-US");
    return datePipe.transform(value, 'dd/MM/yyyy');
  }


}
