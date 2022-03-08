import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSuff'
})
export class ThousandSuffPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var exp, rounded,
      suffixes = ['k', 'M'];

    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    }

    exp = Math.round(Math.log(value) / Math.log(1000));

    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}
