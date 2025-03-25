import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskComponent } from "./task/task.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { FormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";

@NgModule ({
  declarations: [TaskListComponent, TaskComponent, EditFormComponent, TaskFormComponent],
  imports: [FormsModule],
  exports: [TaskFormComponent, TaskListComponent]
})

export class TaskModule {

}
