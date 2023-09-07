import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BadRouteComponent } from './bad-route/bad-route.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./todolist-base/todolist-base.module').then(
        (m) => m.TodolistBaseModule
      ),
  },
  {
    path: 'simple-weather-app',
    loadChildren: () =>
      import('./simple-weather-app/simple-weather-app.module').then(
        (m) => m.SimpleWeatherAppModule
      ),
  },
  { path: '**', component: BadRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
