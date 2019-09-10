import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/http/tasks-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { LoginService } from 'src/app/core/services/http/login.service';


@Component({
  selector: 'app-tasks-main-page',
  templateUrl: './tasks-main-page.component.html',
  styleUrls: ['./tasks-main-page.component.css']
})
export class TasksMainPageComponent implements OnInit {

  bsModalRef: BsModalRef;

  tasks: any = [];

  constructor(
    private modalService: BsModalService,
    private taskService: TasksService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  onAddTask() {
    this.bsModalRef = this.modalService.show(AddEditTaskComponent);
    this.bsModalRef.content.onClose = (added) => {
      if (added) {
        this.getTasks();
      }
    }
  }

  onEditTask(task) {
    console.log(task)
    this.bsModalRef = this.modalService.show(AddEditTaskComponent, {initialState: {task}});
    this.bsModalRef.content.onClose = (updated) => {
      if (updated) {
        this.getTasks();
      }
    }
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe(result => {
      this.tasks = result;
      console.log(result);
    }, error => {console.log(error)});
  }

  onDeleteTask(id) {
    let confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.taskService.deleteTask(id).subscribe(result => {
        console.log(result);
        this.getTasks();
      }, error => {console.log(error)});
    } else {
      this.getTasks();
    }
  }

  onLogOut() {
    this.loginService.logout();
  }

}
