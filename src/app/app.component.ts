import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { DofusBookService } from './services/dofus-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private dofusBookService: DofusBookService) {}

  ngOnInit(): void {
    
  }

}
