import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getEquipments(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('http://localhost:3000/items/equipments');
  }

  getIngredients(item: Item): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`http://localhost:3000/items/ingredients/${item.id}`)
  }

  patchItem(item: Item): Observable<Item> {
    return this.httpClient.patch<Item>(`http://localhost:3000/items/${item.id}`, item);
  }
}
