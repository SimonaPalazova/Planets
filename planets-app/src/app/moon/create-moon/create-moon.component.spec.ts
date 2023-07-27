import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoonComponent } from './create-moon.component';

describe('CreateMoonComponent', () => {
  let component: CreateMoonComponent;
  let fixture: ComponentFixture<CreateMoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMoonComponent]
    });
    fixture = TestBed.createComponent(CreateMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
