import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterLink, RouterLinkWithHref} from "@angular/router";



@NgModule({
    declarations: [
        TopNavComponent,
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkWithHref
  ]
})
export class CoreModule { }
