import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: "app-dashboard",
    imports: [CommonModule, FormsModule],
    standalone: true,
    template: `
    <h1>Dashboard</h1>
    
    <!-- Layout nút chọn ngang -->
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <button 
        *ngFor="let component of components"
        (click)="selectComponent(component)"
        [ngClass]="{ 'active': selectedComponent === component }"
      >
        {{ component }}
      </button>
    </div>

    <!-- Hiển thị component đã chọn -->
    <ng-container *ngComponentOutlet="componentSelected"></ng-container>
  `,
  styles: [`
    button {
      padding: 8px 16px;
      border: 1px solid #ccc;
      background-color: white;
      cursor: pointer;
    }
    button.active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }
  `]
})

export class DashboardComponent {
    components = ["User", "Calendar", "Weather", "Starts"];
    componentSelected: any;
    selectedComponent: string = "User";
    async selectComponent(component: string) {
        this.selectedComponent = component;
        if (component === "User") {
            
            

            const { UserWidgetComponent } = await import("./DasboardChildren/user-widget.component");
            this.componentSelected = UserWidgetComponent;
        }
        else if (component === "Calendar") {
            const {CalendarWidgetComponent } = await import("./DasboardChildren/calendar-widget.component");
            this.componentSelected = CalendarWidgetComponent;
        }
        else if (component === "Weather") {
            const { WeatherWidgetComponent } = await import("./DasboardChildren/weather-widget.component");
            this.componentSelected = WeatherWidgetComponent;
        }
        else if (component === "Starts") {
            const { StatsWidgetComponent } = await import("./DasboardChildren/stats-widget.component");
            this.componentSelected = StatsWidgetComponent;
        }
    }
}