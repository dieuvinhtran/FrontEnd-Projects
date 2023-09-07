import { Component, OnInit } from '@angular/core';
import { TaskStatus, Task } from 'src/app/model/Task';

@Component({
  selector: 'app-todolist-logic',
  templateUrl: './todolist-logic.component.html',
  styleUrls: ['./todolist-logic.component.css'],
})
export class TodolistLogicComponent implements OnInit {
  private taskIdTracker: number;
  private DEFAULT_TASK_NAME: string;
  private DEFAULT_TASK_STATUS: TaskStatus;

  taskList: Task[];
  editableTasksList: boolean[];

  constructor() {
    this.taskIdTracker = 1;
    this.DEFAULT_TASK_NAME = 'Task';
    this.DEFAULT_TASK_STATUS = TaskStatus.inWork;

    this.taskList = [];
    this.editableTasksList = [];
  }

  ngOnInit() {}

  onEditTask(event: Task) {
    let index = this.findIndexOfTask(event);
    this.editableTasksList[index] = true;
  }

  onSaveTask(anewedTask: Task) {
    let index = this.findIndexOfTask(anewedTask);
    this.taskList[index] = anewedTask;
    this.editableTasksList[index] = false;
  }

  findIndexOfTask(task: Task): number {
    let index = 0;

    for (let item of this.taskList) {
      if (task.id === item.id) break;

      index++;
    }

    return index;
  }

  onRemoveTask(event: Task) {
    this.taskList = this.taskList.filter((element: Task) => {
      return element.id !== event.id;
    });
  }

  onAddTask() {
    let newElement = this.createNewTask();
    this.taskList.push(newElement);
    this.editableTasksList.push(false);
  }

  createNewTask() {
    let element: Task = {
      id: this.taskIdTracker,
      taskName: this.DEFAULT_TASK_NAME + this.taskIdTracker,
      taskStatus: this.DEFAULT_TASK_STATUS,
    };
    this.taskIdTracker++;
    return element;
  }
}
