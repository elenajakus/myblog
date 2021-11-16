import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagamrolComponent } from './magamrol.component';

describe('MagamrolComponent', () => {
  let component: MagamrolComponent;
  let fixture: ComponentFixture<MagamrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagamrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagamrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
