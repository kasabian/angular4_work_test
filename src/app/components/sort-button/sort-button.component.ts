import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {Category} from '../../interfaces/category.interfaces';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})

export class SortButtonComponent implements OnInit {

  IsOpenSortMenu = false;

  lastTerm: string;

  @Input() items: Category[];

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
