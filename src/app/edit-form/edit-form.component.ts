import { Component, inject, input } from '@angular/core';
import { TaskService } from '../shared/services/task.service';


@Component({
  selector: 'app-edit-form',
  standalone: false,
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  taskService = inject(TaskService)
  tasks = this.taskService.tasks
  currentTitle = input()
  updatedTitle = ''


  updateHandler() {
    let task = this.tasks().find(task => task.title === this.currentTitle())
    console.log(task)
    task!.title = this.updatedTitle

  }
}
