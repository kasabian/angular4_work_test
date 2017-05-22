import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { UniqueArrayPipe } from './unique-array.pipe';
import { CommunicationService } from './communication.service';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    SortButtonComponent,
    UniqueArrayPipe,
    MenuItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
