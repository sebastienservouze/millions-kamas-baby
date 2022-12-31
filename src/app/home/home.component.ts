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
        this.control.setValue(selectedItemName);
      }
    });

    this.control.valueChanges.subscribe(itemName => {
      this.filter(itemName);
      if (this.filteredEquipments.filter(item => item.name === itemName).length === 1) {
        this.selectEquipment(itemName);
      }    
    });
  }

  filter(itemName: string) {
    if (itemName) this.filteredEquipments = this.equipments.filter((equipment: Item) => equipment.name.toLowerCase().includes(itemName.toLowerCase())).slice(0, 50).sort();
  }

  findEquipmentByName(itemName: string): Item {
    return this.equipments.filter((equipment: Item) => equipment.name.toLowerCase() === itemName.toLowerCase())[0];
  }

  selectEquipment(itemName: string) {
    this.selectedEquipment = this.findEquipmentByName(itemName);
    localStorage.setItem('selectedItemName', '' + itemName);

    this.itemsService.getIngredients(this.selectedEquipment).subscribe((ings: []) => {
      this.selectedEquipment.ingredients = ings;
      this.computePrice();
    });
  }

  computePrice() {
    if (this.selectedEquipment.ingredients.some((ing: any) => ing.lastPrice <= 0)) this.selectedEquipment.lastPrice = 0;
    
    this.selectedEquipment.lastPrice = 0;
    this.selectedEquipment.ingredients.forEach((ing: any) => {
      this.selectedEquipment.lastPrice += ing.lastPrice * ing.count;
    })
  }
}
