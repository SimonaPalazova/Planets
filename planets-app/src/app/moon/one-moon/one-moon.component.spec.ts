import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoonComponent } from './one-moon.component';

describe('OneMoonComponent', () => {
  let component: OneMoonComponent;
  let fixture: ComponentFixture<OneMoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneMoonComponent]
    });
    fixture = TestBed.createComponent(OneMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
