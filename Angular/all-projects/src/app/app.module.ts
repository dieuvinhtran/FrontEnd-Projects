import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BadRouteComponent } from './bad-route/bad-route.component';
import { TodolistBaseModule } from './todolist-base/todolist-base.module';
import { SimpleWeatherAppModule } from './simple-weather-app/simple-weather-app.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, BadRouteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodolistBaseModule,
    SimpleWeatherAppModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
