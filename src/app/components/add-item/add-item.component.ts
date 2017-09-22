import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Category} from '../../interfaces/category.interfaces';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  form: FormGroup;

  @Output() onAddNewItem = new EventEmitter<Category>();

  priceValidate(val: FormControl) {
    return val.value >= 1 && val.value <= 100 ? null : 'error';
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      category: ['', [ Validators.minLength(3), Validators.maxLength(15), Validators.required]],
      name: ['', [ Validators.minLength(3), Validators.maxLength(15), Validators.required]],
      price: [10, this.priceValidate]
    });
  }

  ngOnInit() {
  }

  addNewItem() {
    if (this.form.valid) {
      this.onAddNewItem.emit(this.form.value);
    }
  }

}
