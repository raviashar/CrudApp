import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ChartsModule
  ],
  providers: [],
  exports: [ChartComponent ],
  bootstrap: [ ChartComponent ]
})
export class ChartModule { }
