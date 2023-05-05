import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material_Modules } from './components/material/material.index';

@NgModule({
  declarations: [],
  exports: [
    Material_Modules
  ],
  imports: [
    CommonModule,
    Material_Modules
  ]
})
export class SharedModule { }
