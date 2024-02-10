import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
