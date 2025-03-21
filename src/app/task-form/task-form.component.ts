import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskService = inject(TaskService)
  tasks = this.taskService.tasks

  newTaskTitle = signal<string>('')
  newPriority = signal<'low' | 'medium' | 'high'>('low')

  addTaskHandler(title: string, priority: 'low' | 'medium' | 'high') {

    if (title) {
    this.taskService.addTask(this.newTaskTitle(), priority)
} else {
  alert('You need to enter something')
}
    this.newTaskTitle.set('')

  }
}
