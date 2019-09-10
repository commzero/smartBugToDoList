import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskRequestModel } from '../../models/task-request-model';

@Injectable()
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }


  // to get all data from json-server
  getAllTasks() {
    return this.http.get(environment.tasksApiUrl + 'tasks');
  }

  // to add task to json-server object
  addNewTask(body: TaskRequestModel) {
   return this.http.post(environment.tasksApiUrl + 'tasks', body);
  }

  // to delete task from json-server
  deleteTask(taskId: number) {
    return this.http.delete(environment.tasksApiUrl + 'tasks/' + taskId);
  }

  // to update existing task from json-server
  updateTask(taskId: number, body: TaskRequestModel) {
    return this.http.put(environment.tasksApiUrl + 'tasks/' + taskId, body)
  }

  // to get single task by taskId
  getTaskById(taskId: number) {
    return this.http.get(environment.tasksApiUrl + 'tasks/' + taskId);
  }

}
