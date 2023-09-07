import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWeatherAppContentComponent } from './simple-weather-app-content/simple-weather-app-content.component';
import { SimpleWeatherAppLogicComponent } from './simple-weather-app-logic/simple-weather-app-logic.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: SimpleWeatherAppLogicComponent }],
  },
];

@NgModule({
  declarations: [
    SimpleWeatherAppContentComponent,
    SimpleWeatherAppLogicComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SimpleWeatherAppModule {}
