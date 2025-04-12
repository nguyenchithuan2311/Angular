import { ChangeDetectorRef, Component, contentChild, Signal, viewChild } from "@angular/core";
import { AlertTriggerComponent } from "./alert-trigger.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-alert",
    imports: [AlertTriggerComponent, CommonModule],
    standalone: true,
    template: `
        <ng-content></ng-content>
    <div 
      *ngIf="show"
      role="alert"
      style="
        margin-top: 1rem;
        padding: 1rem;
        background-color: #f8d7da;
        border: 1px solid #f5c2c7;
        border-radius: 0.375rem;
        color: #842029;
        font-weight: 500;
      ">
      🚨 This is an alert message!
    </div>
    `
})

export class AlertComponent {
    show: boolean = false;
    constructor(private cdr: ChangeDetectorRef) {}
    triggerBtn: Signal<AlertTriggerComponent | undefined>= contentChild(AlertTriggerComponent);
    ngOnInit() {
        this.triggerBtn()?.triggerEmit.subscribe(() => {
            this.show = true;
            this.cdr.detectChanges();
            setTimeout(() => {
                this.show = false;
                this.cdr.detectChanges();
              }, 5000);
        });
        
    }
}
