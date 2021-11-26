import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpeldanyComponent } from './quizpeldany.component';

describe('QuizpeldanyComponent', () => {
  let component: QuizpeldanyComponent;
  let fixture: ComponentFixture<QuizpeldanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizpeldanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizpeldanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
