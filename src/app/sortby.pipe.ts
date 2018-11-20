import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortby',
  pure: false
})
export class SortbyPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
