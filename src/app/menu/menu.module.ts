import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { SearchComponent } from '../search/components/search.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers:[MenuService],
  exports: [
    SearchComponent,
  ]
})

export class MenuModule { }
