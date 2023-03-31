import { Injectable } from '@angular/core';

type TQuestionIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

type TQuestion = {
  id: string;
  question: string;
  answers: [string, string, string, string];
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  get playerName(): string {
    return this._playerName;
  }

  set playerName(value: string) {
    if (this._playerName === undefined) {
      this._playerName = value;
    }
  }
  private stage: TQuestionIndex = 0;
  private _playerName: string;

  constructor() { }

  public nextQuestion(): TQuestion {
    return {
      "id": "1",
      "question": "What is the capital of France?",
      "answers": [
        "Paris",
        "Madrid",
        "Berlin",
        "London"
      ]
    }
  }
}
