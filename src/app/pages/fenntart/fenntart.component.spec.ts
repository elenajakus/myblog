import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenntarthComponent } from './fenntart.component';

describe('FenntartComponent', () => {
  let component: FenntartComponent;
  let fixture: ComponentFixture<FenntartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FenntartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FenntartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
