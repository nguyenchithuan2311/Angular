import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-task-input',
    imports: [CommonModule, FormsModule],
    template: `
    <div 
      style="margin-bottom: 1rem; padding: 1rem; background-color: #fce4ec; border-radius: 1rem; text-align: center;"
    >
      <input 
        [(ngModel)]="task" 
        placeholder="Enter a new task" 
        style="
          padding: 0.5rem 1rem;
          border: 2px solid #f48fb1;
          border-radius: 0.75rem;
          width: 80%;
          font-size: 1rem;
        "
      />
    </div>
  `,
    standalone: true
})
export class TaskInputComponent {
    task: string = '';
}