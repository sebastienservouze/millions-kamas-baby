import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDisplayerComponent } from './equipment-displayer.component';

describe('EquipmentDisplayerComponent', () => {
  let component: EquipmentDisplayerComponent;
  let fixture: ComponentFixture<EquipmentDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
