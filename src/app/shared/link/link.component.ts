import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
    <a class="hover:cursor-pointer">
      <ng-content></ng-content>
    </a>
  `,
})
export class LinkComponent {

  constructor() { }
}
