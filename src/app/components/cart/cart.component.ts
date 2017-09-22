import {Component, OnInit } from '@angular/core';
import {CartService } from './cart.service';
import {CommunicationService } from '../../services/communication.service';
import {Category} from '../../interfaces/category.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})

export class CartComponent implements OnInit {

  items: Category[] = [];

  sumOfPrices = 0;

  constructor(private cartService: CartService, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.getMenuSub().subscribe(
      (item: Category) => {
        this.cartService.pushItem(item);
        this.sumOfPrices = this.cartService.getSumPrice();
      });
    this.items = this.cartService.items;
  }

  removeItem(index) {
    this.cartService.removeItem(index);
    this.sumOfPrices = this.cartService.getSumPrice();
  }
}
