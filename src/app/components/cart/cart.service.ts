import {Injectable} from '@angular/core';
import {Category} from '../../interfaces/category.interfaces';

@Injectable()
export class CartService {
  items: Category[] = [];

  constructor() { }

  pushItem(obj: Category) {
    this.items.push(obj);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getSumPrice () {
    let sum = 0;

    this.items.forEach((item: Category) => {
      sum += item.price;
    });

    return sum;
  }
}
