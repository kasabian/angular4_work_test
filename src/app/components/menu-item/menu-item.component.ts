import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {Category} from '../../interfaces/category.interfaces';

@Component({
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: Category;

  constructor() { }

  ngOnInit() { }
}
