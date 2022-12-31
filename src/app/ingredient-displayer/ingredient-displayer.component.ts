import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

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

  @Output()
  newPriceEvent: EventEmitter<number> = new EventEmitter();

  behaviour: Subject<number> = new Subject();
  
  constructor(private itemsService: ItemsService) {
    this.behaviour.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      itemsService.patchItem(this.ingredient).subscribe();
    });
  }

  onUnitaryPriceChange() {
    this.newPriceEvent.emit();
    this.behaviour.next(this.ingredient.lastPrice);
  }

}
