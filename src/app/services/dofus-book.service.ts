import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, map, merge, mergeMap, Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DofusBookService {

  constructor(private httpClient: HttpClient) { }

  private getEquipments(page: number): Observable<Item[]> {
    return this.httpClient.get<any>(`https://retro.dofusbook.net/items/retro/search/equipment?context=equipment&display=mosaic&sort=desc&view=effects&page=${page}`).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  public getAllEquipments(): Observable<Item[]> {
    let observables = []
    for (let page = 1; page <= 23; page++) {
      observables.push(this.getEquipments(page));
    }

    return forkJoin(observables).pipe(
      map(items => items.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }

}
