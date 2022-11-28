import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
