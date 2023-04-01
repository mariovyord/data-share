import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import {TQuestion, TQuestionIndex} from "../../types/types";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit{
  public question$ = this.gameService.question$;
  public stage$ = this.gameService.stage$;

  constructor(public gameService: GameService) {}

  public ngOnInit() {
    this.startGame();
  }

  public startGame() {
    this.gameService.startGame();
  }
}
