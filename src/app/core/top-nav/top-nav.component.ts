import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  public toggleHamburger = false;

  constructor() { }

  public onToggleHamburger(): void {
    this.toggleHamburger = !this.toggleHamburger;
  }
}
