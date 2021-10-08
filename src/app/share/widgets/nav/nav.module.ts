import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NavComponent,
  ]
})
export class NavModule { }
