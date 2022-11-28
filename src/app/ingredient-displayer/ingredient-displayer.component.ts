import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-ingredient-displayer',
  templateUrl: './ingredient-displayer.component.html',
  styleUrls: ['./ingredient-displayer.component.scss']
})
export class IngredientDisplayerComponent {

  _ingredient: Item | null = null;

  @Input()
  set ingredient(ingredient: Item | null) {
    this._ingredient = ingredient;
  }

  get ingredient(): Item | null {
    return this._ingredient;
  }

  
  unitaryPrice: number;

  @Output()
  newPriceEvent: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  onUnitaryPriceChange() {
    this.newPriceEvent.emit(this.unitaryPrice * this.ingredient.count);
  }

}
