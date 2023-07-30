import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonsByOwnerComponent } from './moons-by-owner.component';

describe('MoonsByOwnerComponent', () => {
  let component: MoonsByOwnerComponent;
  let fixture: ComponentFixture<MoonsByOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonsByOwnerComponent]
    });
    fixture = TestBed.createComponent(MoonsByOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
