import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoCompletedPage } from './to-do-completed/to-do-completed.page';
import { ToDoListPage } from './to-do-list/to-do-list.page';

const routes: Routes = [
  {
    path: 'todo-list',
    component: ToDoListPage
  },
  {
    path:'todo-completed',
    component: ToDoCompletedPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
