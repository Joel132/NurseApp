import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistorialComponent } from './add-historial.component';

describe('AddHistorialComponent', () => {
  let component: AddHistorialComponent;
  let fixture: ComponentFixture<AddHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
