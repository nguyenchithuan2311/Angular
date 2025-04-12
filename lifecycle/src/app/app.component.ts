import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleComponent, FormsModule, CommonModule],
  standalone: true,
  template: `
    <h2>🧪 Angular Lifecycle Demo</h2>
    <input [(ngModel)]="username" placeholder="Change name" />
    <button (click)="toggleChild()">Toggle Component</button>
    <hr />
    <app-lifecycle *ngIf="show" [name]="username"></app-lifecycle>
  `
})
export class AppComponent {
  username = 'Alice';
  show = true;

  toggleChild() {
    this.show = !this.show;
  }
}
