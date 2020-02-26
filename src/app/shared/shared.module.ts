import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../shared/safe.pipe';

@NgModule({
  declarations: [ 
    SafePipe
   ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    SafePipe
  ]
})
export class SharedModule { }
