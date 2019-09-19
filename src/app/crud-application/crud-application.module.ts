import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CrudApplicationComponent } from './crud-application.component';

@NgModule({
  declarations: [
    CrudApplicationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CrudApplicationModule { }
