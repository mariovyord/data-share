import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Status, TAnswer, TQuestion, TQuestionIndex} from "../types/types";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private status: Status = Status.PLAYING;
  private stage: TQuestionIndex = 0;
  private _playerName: string | undefined;

  constructor(private dataService: DataService) { }

  public getPlayerName(): string | undefined {
    return this._playerName;
  }

  public setPlayerName(name: string): string {
    if (typeof this._playerName !== "string") {
      this._playerName = name;
    }

    return this._playerName;
  }

  public getNextQuestion(): Observable<TQuestion> {
      this.stage = (this.stage + 1) as TQuestionIndex;
      return this.dataService.getQuestion(this.stage);
  }

  private getAnswer(): Observable<TAnswer | null> {
    return this.dataService.getAnswer(this.stage, "TEST");
  }
}
