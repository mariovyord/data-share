import {Component, Input} from '@angular/core';
import {TQuestion} from "../../types/types";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  @Input() public question: TQuestion | null;
}
