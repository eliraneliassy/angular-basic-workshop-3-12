import { Item } from './item.interface';
import { Component } from '@angular/core';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: Item = db[0];

  constructor() {
    console.log(this.item);
  }
}
