import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlanetComponent } from './one-planet.component';

describe('OnePlanetComponent', () => {
  let component: OnePlanetComponent;
  let fixture: ComponentFixture<OnePlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnePlanetComponent]
    });
    fixture = TestBed.createComponent(OnePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
