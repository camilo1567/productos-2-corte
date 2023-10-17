import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpComponent } from './buscarp.component';

describe('BuscarpComponent', () => {
  let component: BuscarpComponent;
  let fixture: ComponentFixture<BuscarpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarpComponent]
    });
    fixture = TestBed.createComponent(BuscarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
