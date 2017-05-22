import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommunicationService {
  
  private menuItemSource = new Subject<Object>();

  constructor() { }

  sendMenuItem(obj: Object) {
    this.menuItemSource.next(obj);
  }

  getMenuSub(): Observable<Object> {
    return this.menuItemSource.asObservable();
  }

}
