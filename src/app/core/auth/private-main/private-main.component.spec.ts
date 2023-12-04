import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMainComponent } from './private-main.component';

describe('PrivateMainComponent', () => {
  let component: PrivateMainComponent;
  let fixture: ComponentFixture<PrivateMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateMainComponent]
    });
    fixture = TestBed.createComponent(PrivateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
