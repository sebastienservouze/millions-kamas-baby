import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-ingredient-displayer',
  templateUrl: './ingredient-displayer.component.html',
  styleUrls: ['./ingredient-displayer.component.scss']
})
export class IngredientDisplayerComponent implements OnInit {

  _ingredient: Item | null = null;

  @Input()
  set ingredient(ingredient: Item | null) {
    this._ingredient = ingredient;
  }

  get ingredient(): Item | null {
    return this._ingredient;
  }

  _itemTotalPrice: number;

  @Input()
  set itemTotalPrice(price: number) {
    this._itemTotalPrice = price;
    this.computePrices();
  }

  @Output()
  newPriceEvent: EventEmitter<number> = new EventEmitter();

  behaviour: Subject<number> = new Subject();

  totalPrice: number;
  percentageOfItemPrice: number;
  
  constructor(itemsService: ItemsService) {
    this.behaviour.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      itemsService.patchItem(this.ingredient).subscribe();
    });
  }

  ngOnInit(): void {
    this.computePrices();
  }

  onUnitaryPriceChange() {
    this.newPriceEvent.emit();
    this.computePrices();
    this.behaviour.next(this.ingredient.lastPrice);
  }

  computePrices() {
    this.totalPrice = this.ingredient.lastPrice * this.ingredient.count;
    this.percentageOfItemPrice = Math.round(this.totalPrice / this._itemTotalPrice * 1000) / 10;
  }

}
