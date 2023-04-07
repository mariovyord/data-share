import {BehaviorSubject, mergeMap, Observable, of, tap} from "rxjs";
import {Status, TAnswer, TQuestion, TQuestionIndex, TSelectedAnswer} from "../types/types";
import {DataService} from "./data.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _playerName: string | undefined;

  private statusSubject = new BehaviorSubject<Status>(Status.PLAYING);
  public status$: Observable<Status> = this.statusSubject.asObservable();

  private stageSubject = new BehaviorSubject<TQuestionIndex>(1);
  public stage$: Observable<TQuestionIndex> = this.stageSubject.asObservable();

  private questionSubject = new BehaviorSubject<TQuestion | null>(null);
  public question$: Observable<TQuestion | null> = this.questionSubject.asObservable();

  private correctAnswerSubject = new BehaviorSubject<TAnswer | null>(null);
  public correctAnswer$: Observable<TAnswer | null> = this.correctAnswerSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private selectedAnswerSubject = new BehaviorSubject<TSelectedAnswer | null>(null)
  public selectedAnswer$ = this.selectedAnswerSubject.asObservable();

  constructor(private dataService: DataService) { }

  public getPlayerName(): string | undefined {
    return this._playerName;
  }

  public setPlayerName(name: string): void {
    if (typeof this._playerName !== "string") {
      this._playerName = name;
    }
  }

  public startGame(name: string): void {
    this.setPlayerName(name);
    this.dataService.getQuestion(1).pipe(
      mergeMap(question => {
        this.questionSubject.next(question);
        return of(question);
      })
    ).subscribe();
  }

  public loadNextQuestion(): void {
    if (this.stageSubject.value === 15) return;

    this.loadingSubject.next(true);
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

  public loadAnswer(): Observable<TAnswer | null> {
    if (this.questionSubject.value) {
      return this.dataService.getAnswer(this.stageSubject.value, this.questionSubject.value.id)
        .pipe(tap(answer => {
            this.correctAnswerSubject.next(answer);
        }));
    } else {
      return of(null);
    }
  }

  public clearQuestion(): void {
    this.questionSubject.next(null);
    this.correctAnswerSubject.next(null);
  }

  public selectAnswer(answer: TSelectedAnswer) {
      if (answer === this.selectedAnswerSubject.value) {
        this.selectedAnswerSubject.next(null);
      } else {
        this.selectedAnswerSubject.next(answer);
      }
  }

  public submitAnswer(): void {
    if (Object.is(this.questionSubject.value, null) || Object.is(this.selectedAnswerSubject.value, null)) {
      return ;
    }

    const selected = this.selectedAnswerSubject.value;

    this.loadAnswer()
        .subscribe(answer => {
          console.log(selected, answer)
          if (selected === answer?.correct_answer) {
            this.statusSubject.next(Status.NEXT);
          } else {
            this.statusSubject.next(Status.GAME_OVER);
          }
        })
    }
}
