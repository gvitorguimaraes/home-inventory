import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInternComponent } from './card-intern.component';

describe('CardInternComponent', () => {
  let component: CardInternComponent;
  let fixture: ComponentFixture<CardInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
