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
      this.equipments.forEach((equipment: Item) => this.computePrice(equipment));

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
      this.computePrice(this.selectedEquipment);
    });
  }

  computePrice(equipment: Item) {
    if (equipment.ingredients.some((ing: any) => ing.lastPrice <= 0)) equipment.lastPrice = 0;
    
    equipment.lastPrice = 0;
    equipment.ingredients.forEach((ing: any) => {
      equipment.lastPrice += ing.lastPrice * ing.count;
    })
  }

  updateSells() {
    console.log('update');
    this.equipments = JSON.parse(JSON.stringify(this.equipments));
  }
}
