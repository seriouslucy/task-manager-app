// task-list.component.ts
import { Component, signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskComponent]
})
export class TaskListComponent {
  tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ];

  
  filter = 'All';

  get filteredTasks() {
    if (this.filter === 'Completed') {
      return this.tasks.filter(task => task.completed);
    }
    if (this.filter === 'Pending') {
      return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
  }

  changeFilter(status: string) {
    status = this.filter;
  }
}
