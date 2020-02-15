import { Component } from '@angular/core'
import { Weather } from '../../app.component'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  weather: Weather = {
    city: "Los Angeles",
    conditions: "-",
    temperature: 0,
    icon: "",
    humidity: "-",
    description: "",
    country: ""
  }
  
  update(weather: Weather) {
    this.weather = weather
  }
}