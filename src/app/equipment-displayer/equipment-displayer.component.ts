import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-equipment-displayer',
  templateUrl: './equipment-displayer.component.html',
  styleUrls: ['./equipment-displayer.component.scss']
})
export class EquipmentDisplayerComponent {

  _equipment: Item | null = null;

  @Input()
  set equipment(equipment: Item | null) {
    this._equipment = equipment;
    this.computePrice();
  }

  get equipment(): Item | null {
    return this._equipment;
  }

  constructor() { }

  computePrice() {
    if (this.equipment.ingredients.some((ing: any) => ing.lastPrice <= 0)) this.equipment.lastPrice = 0;
    
    this.equipment.lastPrice = 0;
    this.equipment.ingredients.forEach((ing: any) => this.equipment.lastPrice += ing.lastPrice);
  }

}
