import { Component } from "@angular/core";

@Component({
    selector: 'app-task-list',
    template: `
      <h3>✅ Tasks</h3>
      <button (click)="addTask()">Add Task</button>
      <app-task-item *ngFor="let task of tasks" [task]="task"></app-task-item>
    `
  })

  export class TaskListComponent {
    tasks = [
        { id: 1, name: 'Learn Angular', done: false },
        { id: 2, name: 'Test ChangeDetection', done: false }
    ];
  
    addTask() {
        this.tasks = [
            ...this.tasks,
            { id: Date.now(), name: 'New Task ' + Date.now(), done: false }
          ];
    }
  }