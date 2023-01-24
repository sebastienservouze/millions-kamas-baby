import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-equipment-displayer',
  templateUrl: './equipment-displayer.component.html',
  styleUrls: ['./equipment-displayer.component.scss']
})
export class EquipmentDisplayerComponent {

  _equipment: Item | null = null;

  @Output()
  updateSells = new EventEmitter<void>();

  @Input()
  set equipment(equipment: Item | null) {
    this._equipment = equipment;
    this.computeBenefs();
  }

  get equipment(): Item | null {
    return this._equipment;
  }

  constructor(private itemService: ItemsService) { }

  computePrice() {
    if (this.equipment.ingredients.some((ing: any) => ing.lastPrice <= 0)) this.equipment.lastPrice = 0;
    
    this.equipment.lastPrice = 0;
    this.equipment.ingredients.forEach((ing: any) => this.equipment.lastPrice += ing.lastPrice * ing.count);

    this.computeBenefs();
  }

  patch() {
    this.computeBenefs();
    this.itemService.patchItem(this.equipment).subscribe();
  }

  computeBenefs() {
    if (this.equipment.lastPrice && this.equipment.last_seen_price) {
      this.equipment.benefs = this.equipment.last_seen_price - this.equipment.lastPrice;
    }

    this.updateSells.emit();
  }

}
