import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nav: Nav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/todo-list', name: 'ToDo-List', exact: true },
    { link: '/simple-weather-app', name: 'Simple Weather App', exact: true },
  ];

  title = 'all-projects';
}
