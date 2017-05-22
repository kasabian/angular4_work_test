import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})

export class SortButtonComponent implements OnInit {

  IsOpenSortMenu: boolean = false;

  lastTerm: string;

  @Input() items: Array<Object>;

  @Output() onSelect = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  switchSortMenu() {
  	this.IsOpenSortMenu = !this.IsOpenSortMenu;
  }

  selectTerm(term) {

    this.lastTerm = term;
    this.onSelect.emit(term);
    this.IsOpenSortMenu = false;
  }  

}
