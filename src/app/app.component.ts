import { Item } from './item.interface';
import { Component } from '@angular/core';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  db: Item[] = db;
  shoppingCart: Item[] = [];
  addToCart(item: Item) {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }



}
