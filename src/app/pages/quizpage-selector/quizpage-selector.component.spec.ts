import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpageSelectorComponent } from './quizpage-selector.component';

describe('QuizpageSelectorComponent', () => {
  let component: QuizpageSelectorComponent;
  let fixture: ComponentFixture<QuizpageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizpageSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizpageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
