import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [CommonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatTooltipModule, MatIconModule, MatTableModule]
})
export class AngularMaterialModule { }



