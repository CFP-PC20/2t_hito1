import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BitComponent } from './bit/bit.component';
import {ChartModule} from '../components/chart/dist/chart';


@NgModule({
  declarations: [CrudComponent, AboutComponent, HomeComponent, ErrorComponent, BitComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ChartModule,
    MatIconModule
  ]
})
export class PagesModule { }
