import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})

export class MenuComponent implements OnInit {
  
  items: Array<Object> = [];	

  sortTerm: string;

  constructor(private menuService: MenuService, private communicationService: CommunicationService) { }

  ngOnInit() {

  	this.items = this.menuService.items;
  }

  addToCart (obj) {
  	
  	this.communicationService.sendMenuItem(obj);
  }

  setSortTerm(term) {
    
    this.sortTerm = term;
  }


}
