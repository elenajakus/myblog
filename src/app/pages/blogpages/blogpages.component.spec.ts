import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpagesComponent } from './blogpages.component';

describe('BlogpagesComponent', () => {
  let component: BlogpagesComponent;
  let fixture: ComponentFixture<BlogpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
