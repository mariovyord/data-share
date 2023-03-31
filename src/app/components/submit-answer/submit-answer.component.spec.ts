import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAnswerComponent } from './submit-answer.component';

describe('SubmitAnswerComponent', () => {
  let component: SubmitAnswerComponent;
  let fixture: ComponentFixture<SubmitAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
