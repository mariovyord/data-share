import { Component, Input } from '@angular/core';
import { TQuestion, TSelectedAnswer } from "../../types/types";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
})
export class AnswersComponent {
  @Input() public question: TQuestion | null;
  @Input() public onSelect: (answer: TSelectedAnswer) => void;

  public selectedAnswer$ = this.gameService.selectedAnswer$;

  constructor(private gameService: GameService) {}
}
