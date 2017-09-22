import {Component, OnInit} from '@angular/core';
import {MenuService} from './menu.service';
import {CommunicationService} from '../../services/communication.service';
import {Category} from '../../interfaces/category.interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [MenuService]
})

export class MenuComponent implements OnInit {
  items: Category[] = [];

  sortTerm: string;

  constructor(
    private menuService: MenuService,
    private communicationService: CommunicationService) {}

  ngOnInit() {
    this.items = this.menuService.items;
  }

  addNewItem(itemObj) {
    this.menuService.addNewItem(itemObj);
  }

  addToCart (obj) {
    this.communicationService.sendMenuItem(obj);
  }

  setSortTerm(term) {
    this.sortTerm = term;
  }
}
