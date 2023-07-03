import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailLoginComponent } from './trail-login.component';

describe('TrailLoginComponent', () => {
  let component: TrailLoginComponent;
  let fixture: ComponentFixture<TrailLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailLoginComponent]
    });
    fixture = TestBed.createComponent(TrailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
