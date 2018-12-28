import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHistorialComponent } from './modify-historial.component';

describe('ModifyHistorialComponent', () => {
  let component: ModifyHistorialComponent;
  let fixture: ComponentFixture<ModifyHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
