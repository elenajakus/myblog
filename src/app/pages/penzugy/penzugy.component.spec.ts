import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenzugyComponent } from './penzugy.component';

describe('PenzugyComponent', () => {
  let component: PenzugyComponent;
  let fixture: ComponentFixture<PenzugyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenzugyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
