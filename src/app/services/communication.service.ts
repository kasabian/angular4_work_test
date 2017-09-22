import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Category} from '../interfaces/category.interfaces';

@Injectable()
export class CommunicationService {
  private menuItemSource = new Subject<Category>();

  constructor() { }

  sendMenuItem(obj: Category) {
    this.menuItemSource.next(obj);
  }

  getMenuSub(): Observable<Object> {
    return this.menuItemSource.asObservable();
  }
}
