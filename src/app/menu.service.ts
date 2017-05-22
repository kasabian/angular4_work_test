import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  items: Array<Object> = [
  	{category:"Супы", name: "Борщ", price: 10},
  	{category:"Супы", name: "Томям", price: 120},
  	{category:"Десерт", name: "Тирамису", price: 30},
  	{category:"Десерт", name: "Корзиночки с кремом и земляникой", price: 55}
  ];

  constructor() { }

}
