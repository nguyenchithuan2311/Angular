import { Component } from "@angular/core";

@Component({
    selector: "app-user-widget",
    template: `
        <div class="user-widget">
            <h2>User Widget</h2>
            <p>Welcome to the user widget!</p>
        </div>
    `,
    standalone: true,
})
export class UserWidgetComponent {
}