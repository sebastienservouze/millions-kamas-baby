import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDisplayerComponent } from './ingredient-displayer.component';

describe('IngredientDisplayerComponent', () => {
  let component: IngredientDisplayerComponent;
  let fixture: ComponentFixture<IngredientDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
