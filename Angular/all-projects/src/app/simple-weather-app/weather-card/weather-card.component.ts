import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() city!: string;
  @Input() icon!: string;
  @Input() temp!: number;

  constructor() {}

  ngOnInit() {}
}
