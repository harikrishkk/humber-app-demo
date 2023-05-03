import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if (value === 1) {
      return "Monday"
    }
  }

}
