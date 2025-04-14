import { Component } from "@angular/core";

@Component({
    selector: "app-stats-widget",
    template: `
        <div class="stats-widget">
            <h2>Statistics Widget</h2>
            <p>Welcome to the statistics widget!</p>
        </div>
    `,
    standalone: true,
})

export class StatsWidgetComponent {
    // Logic for the statistics widget can be added here
}
