import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseOrder'
})
export class ReverseOrderPipe implements PipeTransform {

  transform(value: any, name: string): any {
    if (value === '') {
      return '';
    } else {
        for ( const item of value) {
          item.name = item.name.split('').reverse().join('');
        }
        return value;
    }
  }

}
