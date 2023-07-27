import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanetComponent } from './create-planet.component';

describe('CreatePlanetComponent', () => {
  let component: CreatePlanetComponent;
  let fixture: ComponentFixture<CreatePlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlanetComponent]
    });
    fixture = TestBed.createComponent(CreatePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
