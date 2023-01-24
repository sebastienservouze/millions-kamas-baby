import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-best-sells',
  templateUrl: './best-sells.component.html',
  styleUrls: ['./best-sells.component.scss']
})
export class BestSellsComponent implements OnInit {

  sortedEquipments: Item[];

  @Input()
  set equipments(equipments: Item[]) {
    if (equipments) {
      this.sortedEquipments = this.getSortedEquipments(equipments);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSortedEquipments(equipments: Item[]): Item[] {
    console.log('sort');
    return equipments.filter((equipment: Item) => equipment.benefs).sort((equipment: Item) => equipment.benefs);
  }

}
