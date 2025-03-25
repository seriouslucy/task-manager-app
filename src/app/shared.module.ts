import { NgModule } from "@angular/core";
import { TaskModule } from "./task.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule ({
  declarations: [DashboardComponent, AppComponent],
  imports: [TaskModule, BrowserModule],
  bootstrap: [AppComponent],
  exports: [DashboardComponent]
})

export class SharedModule {

}
