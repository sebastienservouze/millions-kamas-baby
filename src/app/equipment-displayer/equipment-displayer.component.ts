import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-equipment-displayer',
  templateUrl: './equipment-displayer.component.html',
  styleUrls: ['./equipment-displayer.component.scss']
})
export class EquipmentDisplayerComponent {

  _equipment: Item | null = null;
  prices: number[] = [];

  @Input()
  set equipment(equipment: Item | null) {
    this._equipment = equipment;
    this._equipment.ingredients.forEach(ing => this.prices.push(0));
  }

  get equipment(): Item | null {
    return this._equipment;
  }

  totalPrice: number;

  constructor() { }

  onUnitaryPriceChange(totalPriceForIngredient: number, index: number) {
    this.prices[index] = totalPriceForIngredient;
    console.log(this.prices);
    if (!this.prices.some(price => price <= 0)) {
      this.totalPrice = 0;
      this.prices.forEach(price => this.totalPrice += price);
    }
  }

}
