import { Injectable } from '@angular/core';
import { map, Observable, of } from "rxjs";
import { questions } from "../data/questions";
import { answers } from "../data/answers";
import { TAnswer, TQuestion, TQuestionIndex } from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getQuestion(stage: TQuestionIndex): Observable<TQuestion> {
    const key = String(stage)
    const questionsOfStage = questions[key];
    const randomIndex = Math.floor(Math.random() * questionsOfStage.length);
    const randomQuestion = questionsOfStage[randomIndex];

    return of(randomQuestion);
  }

  public getAnswer(stage: number, id: string): Observable<TAnswer | null> {
    return of(answers[String(stage)])
      .pipe(map(answers => answers.find(a => a.id === id) ?? null));
  }
}
