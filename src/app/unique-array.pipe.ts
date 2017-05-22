import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueArray',
  pure: false
})
export class UniqueArrayPipe implements PipeTransform {

  transform(items: any): any {

    let uniqueArrByCategory = [];

    items.forEach( (item) => {
    	
    	let haveMatch = false;

  		uniqueArrByCategory.forEach( (obj) => {

  			if(item.category === obj.category) {
  				haveMatch = true;
  			}

		});	

		if(!haveMatch) {
			uniqueArrByCategory.push(item);
		}

	});	

    return uniqueArrByCategory;
  }

}
