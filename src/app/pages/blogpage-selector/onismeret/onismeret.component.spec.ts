import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnismeretComponent } from './onismeret.component';

describe('OnismeretComponent', () => {
  let component: OnismeretComponent;
  let fixture: ComponentFixture<OnismeretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnismeretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnismeretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
