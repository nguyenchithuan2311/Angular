import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './alert.component';
import { AlertTriggerComponent } from './alert-trigger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertComponent, AlertTriggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'content-child';
}
