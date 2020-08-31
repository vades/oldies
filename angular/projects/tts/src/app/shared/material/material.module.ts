import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatIconModule, MatSnackBarModule, 
  ],
  exports: [
    MatIconModule, MatSnackBarModule
 ]
})
export class MaterialModule { }
