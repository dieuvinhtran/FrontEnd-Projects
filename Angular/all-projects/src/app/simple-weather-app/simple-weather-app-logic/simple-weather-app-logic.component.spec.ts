import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWeatherAppLogicComponent } from './simple-weather-app-logic.component';

describe('SimpleWeatherAppLogicComponent', () => {
  let component: SimpleWeatherAppLogicComponent;
  let fixture: ComponentFixture<SimpleWeatherAppLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleWeatherAppLogicComponent]
    });
    fixture = TestBed.createComponent(SimpleWeatherAppLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
