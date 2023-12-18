import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroProfesionalComponent } from './seguro-profesional.component';

describe('SeguroProfesionalComponent', () => {
  let component: SeguroProfesionalComponent;
  let fixture: ComponentFixture<SeguroProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
