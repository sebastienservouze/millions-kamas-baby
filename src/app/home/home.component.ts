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
  selectedEquipment?: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getEquipments().subscribe((equipments: Item[]) => {
      this.equipments = equipments.sort();

      let selectedItemName = localStorage.getItem('selectedItemName')
      if (selectedItemName) {
        console.log(selectedItemName);
        this.control.setValue(selectedItemName);
      }
    });

    this.control.valueChanges.subscribe(itemName => {
      console.log('Value changes', itemName);
      this.filter(itemName);
      if (this.filteredEquipments.filter(item => item.name === itemName).length === 1) {
        this.selectedEquipment = this.findEquipmentByName(itemName);
        localStorage.setItem('selectedItemName', '' + itemName);
      }    
    });
  }

  filter(itemName: string) {
    if (itemName) this.filteredEquipments = this.equipments.filter((equipment: Item) => equipment.name.toLowerCase().includes(itemName.toLowerCase())).slice(0, 50).sort();
  }

  findEquipmentByName(itemName: string): Item {
    return this.equipments.filter((equipment: Item) => equipment.name.toLowerCase() === itemName.toLowerCase())[0];
  }
}
