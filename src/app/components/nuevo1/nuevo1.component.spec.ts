import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevo1Component } from './nuevo1.component';

describe('Nuevo1Component', () => {
  let component: Nuevo1Component;
  let fixture: ComponentFixture<Nuevo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nuevo1Component]
    });
    fixture = TestBed.createComponent(Nuevo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
