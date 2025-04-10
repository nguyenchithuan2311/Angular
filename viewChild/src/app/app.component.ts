import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from './Task/task-input.component';
import { ToDoListComponent } from './Task/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskInputComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'viewChild';
}
