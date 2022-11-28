import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDisplayerComponent } from './effect-displayer.component';

describe('EffectDisplayerComponent', () => {
  let component: EffectDisplayerComponent;
  let fixture: ComponentFixture<EffectDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
