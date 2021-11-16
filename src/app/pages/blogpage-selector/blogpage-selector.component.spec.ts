import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpageSelectorComponent } from './blogpage-selector.component';

describe('BlogpageSelectorComponent', () => {
  let component: BlogpageSelectorComponent;
  let fixture: ComponentFixture<BlogpageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpageSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
