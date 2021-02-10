import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './containers/menu/menu.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MenuModule { }
