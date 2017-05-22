import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any, name: any): any {
    
    if(name === undefined) {
    	return items;
    }

    return items.filter((item) => {
    	return item.category.toLowerCase().includes(name.toLowerCase());
    })
  }

}
