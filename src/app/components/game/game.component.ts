import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import {TQuestion} from "../../types/types";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  public question$: TQuestion | null = null;

  constructor(private gameService: GameService) {}

  public startGame() {
    this.gameService.startGame();

  }
}
