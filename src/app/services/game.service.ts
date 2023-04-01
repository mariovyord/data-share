import {BehaviorSubject, mergeMap, Observable, of, tap} from "rxjs";
import { TAnswer, TQuestion, TQuestionIndex } from "../types/types";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _playerName: string | undefined;

  private stageSubject = new BehaviorSubject<TQuestionIndex>(1);
  public stage$: Observable<TQuestionIndex> = this.stageSubject.asObservable();

  private questionSubject = new BehaviorSubject<TQuestion | null>(null);
  public question$: Observable<TQuestion | null> = this.questionSubject.asObservable();

  private correctAnswerSubject = new BehaviorSubject<TAnswer | null>(null);
  private correctAnswer$: Observable<TAnswer | null> = this.correctAnswerSubject.asObservable();

  public loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private dataService: DataService) { }

  public getPlayerName(): string | undefined {
    return this._playerName;
  }

  public setPlayerName(name: string): void {
    if (typeof this._playerName !== "string") {
      this._playerName = name;
    }
  }

  public startGame(): void {
    this.dataService.getQuestion(1).pipe(
      mergeMap(question => {
        this.questionSubject.next(question);
        return of(question);
      })
    ).subscribe();
  }

  public loadNextQuestion(): void {
    this.loadingSubject.next(true)
    const nextStage = this.stageSubject.value + 1 as TQuestionIndex;

    this.stageSubject.next(nextStage)

    this.dataService.getQuestion(nextStage).pipe(
      mergeMap(question => {
        this.questionSubject.next(question);
        return of(question);
      }),
      tap(() => this.loadingSubject.next(false))
    ).subscribe();
  }

  public loadAnswer(): void {
    this.dataService.getAnswer(this.stageSubject.value, "TEST").pipe(
      mergeMap(answer => {
        this.correctAnswerSubject.next(answer);
        return of(answer);
      })
    ).subscribe();
  }

  public clearQuestion(): void {
    this.questionSubject.next(null);
    this.correctAnswerSubject.next(null);
  }
}
