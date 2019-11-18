import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListComponent } from './employee-list.component';
import { CrudLibModule } from '../../../projects/crud-lib/src/lib/crud-lib.module';

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CrudLibModule
  ],
  providers: [],
  exports: [EmployeeListComponent ],
  bootstrap: [EmployeeListComponent ]
})
export class EmployeeListModule { }
