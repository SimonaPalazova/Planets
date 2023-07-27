import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonListComponent } from './moon-list.component';

describe('MoonListComponent', () => {
  let component: MoonListComponent;
  let fixture: ComponentFixture<MoonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonListComponent]
    });
    fixture = TestBed.createComponent(MoonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
