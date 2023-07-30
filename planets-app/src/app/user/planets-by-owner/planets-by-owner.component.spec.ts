import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsByOwnerComponent } from './planets-by-owner.component';

describe('PlanetsByOwnerComponent', () => {
  let component: PlanetsByOwnerComponent;
  let fixture: ComponentFixture<PlanetsByOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsByOwnerComponent]
    });
    fixture = TestBed.createComponent(PlanetsByOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
