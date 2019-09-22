import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CrudLibModule } from '../../projects/crud-lib/src/lib/crud-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CrudLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
