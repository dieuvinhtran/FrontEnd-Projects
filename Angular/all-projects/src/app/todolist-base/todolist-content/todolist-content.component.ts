import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskStatus } from 'src/app/model/Task';

@Component({
  selector: 'todolist-content',
  templateUrl: './todolist-content.component.html',
  styleUrls: [
    '../../../../node_modules/bootstrap/dist/css/bootstrap.css',
    './todolist-content.component.css',
  ],
})
export class TodolistContentComponent implements OnInit {
  @Input() content!: Task[];
  @Input() editableList!: boolean[];

  @Output() remove: EventEmitter<any> = new EventEmitter();

  @Output() add: EventEmitter<any> = new EventEmitter();

  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Output() save: EventEmitter<any> = new EventEmitter();

  public newTaskName: string = '';
  public newStatus: TaskStatus = TaskStatus.toDo;

  public statusTypes = Object.values(TaskStatus).filter(
    (value) => typeof value === 'string'
  );

  constructor() {}

  ngOnInit() {}

  onEdit(task: Task) {
    this.edit.emit(task);
    this.newTaskName = task.taskName;
    this.newStatus = task.taskStatus;
  }

  onRemove(task: Task) {
    this.remove.emit(task);
  }

  onAdd() {
    this.add.emit();
  }

  onSave(task: Task, newTaskName: string, taskStatus: TaskStatus) {
    let anewedTask: Task = {
      id: task.id,
      taskName: newTaskName,
      taskStatus: taskStatus,
    };
    this.save.emit(anewedTask);
  }
}
