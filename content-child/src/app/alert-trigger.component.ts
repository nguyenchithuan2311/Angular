import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-alert-trigger",
    template: `
        <button 
      (click)="triggerEmit.emit()" 
      style="
        padding: 0.5rem 1rem;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
      ">
      Click me!
    </button>
    `,
    standalone: true,
})
export class AlertTriggerComponent {
    @Output() triggerEmit = new EventEmitter<void>();
}