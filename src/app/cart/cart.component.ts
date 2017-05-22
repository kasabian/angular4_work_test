import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})

export class CartComponent implements OnInit {

  items: Array<Object> = [];

  sumOfPrices: number = 0;

  constructor(private cartService: CartService, private communicationService: CommunicationService) { }
	
  ngOnInit() {
	
	this.communicationService.getMenuSub().subscribe(
      	(item: Object) => {
      		this.cartService.pushItem(item);
      		this.sumOfPrices = this.cartService.getSumPrice();
    	}
    );

  	this.items = this.cartService.items;
  }

  removeItem(index) {

  	this.cartService.removeItem(index);
  	this.sumOfPrices = this.cartService.getSumPrice();
  }

}
