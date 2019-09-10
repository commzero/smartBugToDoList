import { NgModule } from '@angular/core';
import { TasksMainPageComponent } from './pages/tasks-main-page/tasks-main-page.component';
import { TasksService } from './services/http/tasks-service.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddEditTaskComponent } from './pages/tasks-main-page/add-edit-task/add-edit-task.component';

// modal module ngx
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    TasksMainPageComponent,
    AddEditTaskComponent
  ],
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  providers: [
    TasksService
  ],
  entryComponents: [
    AddEditTaskComponent
  ],
  bootstrap: []
})
export class TasksModule { }
