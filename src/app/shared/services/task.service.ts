import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = signal<Task[]>([
    { title: 'Task 1', completed: false, priority: 'low' },
    { title: 'Task 2', completed: true, priority: 'medium'  },
    { title: 'Task 3', completed: false, priority: 'high'  },
  ]);

  addTask(title: string, priority: 'low' | 'medium' | 'high' ) {
    this.tasks.update(t => [...t , {title: title, completed: false, priority: priority }])

  }

}
