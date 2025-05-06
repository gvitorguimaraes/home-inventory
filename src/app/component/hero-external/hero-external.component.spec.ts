import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExternalComponent } from './hero-external.component';

describe('HeroExternalComponent', () => {
  let component: HeroExternalComponent;
  let fixture: ComponentFixture<HeroExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroExternalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
