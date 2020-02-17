import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class MiscModule { }
