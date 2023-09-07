import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistContentComponent } from './todolist-content/todolist-content.component';
import { RouterModule, Routes } from '@angular/router';
import { TodolistLogicComponent } from './todolist-logic/todolist-logic.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: TodolistLogicComponent }],
  },
];

@NgModule({
  declarations: [TodolistContentComponent, TodolistLogicComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class TodolistBaseModule {}
