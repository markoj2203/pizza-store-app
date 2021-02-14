import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../search/search.service';

import { SearchComponent } from '../search/components/search.component';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ],
  providers:[SearchService],
  exports:[SearchComponent]
})
export class SearchModule { }
