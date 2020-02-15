  
import { Component } from '@angular/core';

export class Weather {
  city: String
  conditions: String
  temperature: number
  icon: String
  humidity: String
  description: String
  country: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'James Weather App';
}