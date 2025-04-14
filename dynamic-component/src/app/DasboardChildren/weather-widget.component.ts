import { Component } from "@angular/core";

@Component({
    selector: "app-weather-widget",
    template: `
        <div class="weather-widget">
            <h2>Weather Widget</h2>
            <p>Welcome to the weather widget!</p>
        </div>
    `,
    standalone: true,
})

export class WeatherWidgetComponent {}