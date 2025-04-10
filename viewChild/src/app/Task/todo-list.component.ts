import { Component, ViewChild, viewChild } from "@angular/core";
import { TaskInputComponent } from "./task-input.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-todo-list",
    imports: [TaskInputComponent,CommonModule],
    template: `
    <div 
      style="max-width: 600px; margin: 2rem auto; font-family: 'Segoe UI', sans-serif; background: #fff0f5; padding: 2rem; border-radius: 1.5rem; box-shadow: 0 0 10px #f8bbd0;"
    >
      <h2 style="text-align: center; color: #d81b60;">💖 To-Do List 💖</h2>

      <app-task-input></app-task-input>

      <div style="text-align: center;">
        <button 
          (click)="addTask()" 
          style="
            background-color: #ec407a;
            color: white;
            border: none;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: background 0.3s;
          "
          onmouseover="this.style.backgroundColor='#d81b60'"
          onmouseout="this.style.backgroundColor='#ec407a'"
        >
          ➕ Thêm
        </button>
      </div>

      <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
        <li 
          *ngFor="let task of tasks" 
          style="background: #f8bbd0; margin: 0.5rem 0; padding: 0.75rem 1rem; border-radius: 1rem; color: #880e4f;"
        >
          💼 {{ task }}
        </li>
      </ul>
    </div>
  `,
    standalone: true,
})

export class ToDoListComponent {
    @ViewChild(TaskInputComponent) taskInputComponent!: TaskInputComponent;
    tasks: string[] = [];

    addTask() {
        console.log(this.taskInputComponent);
       const task = this.taskInputComponent.task.trim();
       console.log(task);
       if(task)
       {
        console.log(this.tasks);
            this.tasks.push(task);
            console.log(this.tasks);
            this.taskInputComponent.task = ''; 
       }
    }
    
}