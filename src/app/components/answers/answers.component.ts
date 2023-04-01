import {Component, Input, OnInit} from '@angular/core';
import {TQuestion} from "../../types/types";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
})
export class AnswersComponent {
  @Input() public question: TQuestion | null;
}
