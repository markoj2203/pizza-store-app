import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MenuService} from './menu/menu.service';
import { SearchService} from './search/search.service';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    MenuModule
  ],
  providers:[MenuService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
