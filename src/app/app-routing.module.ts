import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { HomeJumbotronComponent } from './home/components/home-jumbotron/home-jumbotron.component';
import { HomeOwnedServiceComponent } from './home/components/home-owned-service/home-owned-service.component';
import { MenuComponent } from './menu/containers/menu/menu.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })

  export class AppRoutingModule {};
  export const routingComponents = [HomeComponent,HomeJumbotronComponent,HomeOwnedServiceComponent, MenuComponent];