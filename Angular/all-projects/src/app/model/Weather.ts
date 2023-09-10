export interface WeatherReq {
  longitude: number;
  latitude: number;
  callback: (city: string, icon: string, temp_c: number) => void;
}

export interface Location {
  name: string;
}

export interface Current {
  temp_c: number;
  condition: Condition;
}

export interface Condition {
  icon: string;
}

export interface WeatherApiData {
  location: Location;
  current: Current;
}
