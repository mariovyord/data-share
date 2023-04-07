import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: [
  ]
})
export class StartComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private gameService: GameService) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    })
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const name = this.form.get("name")!.value;
    this.gameService.startGame(name);
    }
}
