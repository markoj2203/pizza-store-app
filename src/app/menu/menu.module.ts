import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from '../search/components/search.component';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],exports:[SearchComponent]
})

export class MenuModule { }
