import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {Category} from '../interfaces/category.interfaces';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Category[], name: string): Category[] {
    if (name === undefined) {
      return items;
    }

    return items.filter((item) => {
      return item.category.toLowerCase().includes(name.toLowerCase());
    });
  }
}
