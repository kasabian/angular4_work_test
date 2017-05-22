import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  
  items: Array<Object> = [];

  constructor() { }

  pushItem(obj: Object) {

  	this.items.push(obj);
  }

  removeItem(index: number) {

  	this.items.splice(index, 1);
  }

  getSumPrice () {

  	let sum = 0;

  	this.items.forEach( item => sum += item["price"])

  	return sum;
  }

}
