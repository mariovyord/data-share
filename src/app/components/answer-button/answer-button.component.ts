import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
})
export class AnswerButtonComponent {
  @Input() public selected: boolean = false;
  @Input() public isCorrect: boolean = false;
}
