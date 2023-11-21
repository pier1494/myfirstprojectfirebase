import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMainComponent } from './public-main.component';

describe('PublicMainComponent', () => {
  let component: PublicMainComponent;
  let fixture: ComponentFixture<PublicMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicMainComponent]
    });
    fixture = TestBed.createComponent(PublicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
