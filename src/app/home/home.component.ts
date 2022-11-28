import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  control = new FormControl('')
  equipments?: Item[];
  filteredEquipments?: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getEquipments().subscribe((equipments: Item[]) => {
      this.equipments = equipments.sort();
      this.filteredEquipments = this.equipments;
    });

    this.control.valueChanges.pipe(startWith('')).subscribe((text: string | null) => {
      if (text && typeof(text) === 'string') this.filteredEquipments = this.equipments?.sort().filter((equipment: Item) => equipment.name.toLowerCase().includes(text.toLowerCase())).sort()
    });
  }

  displayFn(equipment: Item): string {
    return equipment && equipment.name ? equipment.name : '';
  }
}
