import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {CoreModule} from "./core/core.module";
import { GameComponent } from './components/game/game.component';
import { AnswerButtonComponent } from './components/answer-button/answer-button.component';
import { AnswersComponent } from './components/answers/answers.component';
import { QuestionComponent } from './components/question/question.component';
import { SubmitAnswerComponent } from './components/submit-answer/submit-answer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StartComponent } from './components/start/start.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    GameComponent,
    AnswerButtonComponent,
    AnswersComponent,
    QuestionComponent,
    SubmitAnswerComponent,
    LoadingComponent,
    StartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ],
  providers: [],
  exports: [
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
