import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoOrdiniComponent } from './storico-ordini.component';

describe('StoricoOrdiniComponent', () => {
  let component: StoricoOrdiniComponent;
  let fixture: ComponentFixture<StoricoOrdiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoricoOrdiniComponent]
    });
    fixture = TestBed.createComponent(StoricoOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
