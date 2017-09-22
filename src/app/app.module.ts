import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { UniqueArrayPipe } from './pipes/unique-array.pipe';
import { CommunicationService } from './services/communication.service';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    SortButtonComponent,
    UniqueArrayPipe,
    MenuItemComponent,
    FilterPipe,
    AddItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
