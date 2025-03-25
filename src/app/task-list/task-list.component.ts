// task-list.component.ts
import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../shared/services/task.service';


@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

tasksService = inject(TaskService)
tasks = this.tasksService.tasks
isEdit = false;
currentTitle = signal('')


  filterStatus = 'All';

  get filteredTasks() {
    if (this.filterStatus === 'Completed') {
      return this.tasks().filter(task => task.completed);
    }
    if (this.filterStatus === 'Pending') {
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks();
  }

  changeFilter(status: string) {
    status = this.filterStatus;
  }

  editHandler(currentTitle: string) {
    this.isEdit = true
    this.currentTitle.set(currentTitle)
  }

  isChecked() {

  }


}
