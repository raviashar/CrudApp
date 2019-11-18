import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../src/app/shared/angular-material.module';
import { CrudLibComponent } from './crud-lib.component';
import { CrudTitlePipe } from './pipe/crud-title.pipe';

@NgModule({
  declarations: [
    CrudLibComponent,
    CrudTitlePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [CrudLibComponent],
  bootstrap: [CrudLibComponent],
})
export class CrudLibModule { }
