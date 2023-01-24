import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellsComponent } from './best-sells.component';

describe('BestSellsComponent', () => {
  let component: BestSellsComponent;
  let fixture: ComponentFixture<BestSellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
