import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Status, TSelectedAnswer} from "../../types/types";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  public question$ = this.gameService.question$;
  public stage$ = this.gameService.stage$;
  public status$ = this.gameService.status$;
  readonly Status = Status;

  constructor(public gameService: GameService) {}

  public onSubmit(): void {
    this.gameService.submitAnswer();
  }

  public onSelect(answer: TSelectedAnswer): void {
      this.gameService.selectAnswer(answer);
  }

  public onNext(): void {
    this.gameService.loadNextQuestion();
  }
}
