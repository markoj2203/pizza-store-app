import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from '../search/components/search.component';
import { MenuFormComponent } from './containers/menu-form/menu-form.component';
@NgModule({
  declarations: [SearchComponent, MenuFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[SearchComponent,MenuFormComponent]
})

export class MenuModule { }
