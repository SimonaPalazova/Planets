import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoonComponent } from './edit-moon.component';

describe('EditMoonComponent', () => {
  let component: EditMoonComponent;
  let fixture: ComponentFixture<EditMoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMoonComponent]
    });
    fixture = TestBed.createComponent(EditMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
