import {BehaviorSubject, mergeMap, of, tap} from "rxjs";
import { TAnswer, TQuestion, TQuestionIndex } from "../types/types";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private stage: TQuestionIndex = 0;
  private _playerName: string | undefined;
  public question$ = new BehaviorSubject<TQuestion | null>(null);
  public correctAnswer$ = new BehaviorSubject<TAnswer | null>(null);
  public loading: boolean = false;

  constructor(private dataService: DataService) { }

  public getPlayerName(): string | undefined {
    return this._playerName;
  }

  public setPlayerName(name: string): void {
    if (typeof this._playerName !== "string") {
      this._playerName = name;
    }
  }

  public startGame() {
    this.dataService.getQuestion(0).pipe(
      mergeMap(question => {
        this.question$.next(question);
        return of(question);
      })
    ).subscribe();
  }

  public loadNextQuestion(): void {
    this.loading = true;
    this.stage = (this.stage + 1) as TQuestionIndex;
    this.dataService.getQuestion(this.stage).pipe(
      mergeMap(question => {
        this.question$.next(question);
        return of(question);
      }),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public loadAnswer(): void {
    this.dataService.getAnswer(this.stage, "TEST").pipe(
      mergeMap(answer => {
        this.correctAnswer$.next(answer);
        return of(answer);
      })
    ).subscribe();
  }

  public clearQuestion(): void {
    this.question$.next(null);
    this.correctAnswer$.next(null);
  }
}
