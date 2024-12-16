// app.component.ts
import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent, TaskFormComponent]
})
export class AppComponent {
  title = 'Task Manager App';
}
