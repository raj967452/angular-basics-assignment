import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseOrder'
})
export class ReverseOrderPipe implements PipeTransform {

  transform(value: any): any {
    if (value === '') {
      return '';
    } else {
        /*for ( const item of value) {
          item.name = value.split('').reverse().join('');
        }*/
        return value.split('').reverse().join('');
    }
  }

}
