import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanetComponent } from './edit-planet.component';

describe('EditPlanetComponent', () => {
  let component: EditPlanetComponent;
  let fixture: ComponentFixture<EditPlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlanetComponent]
    });
    fixture = TestBed.createComponent(EditPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
