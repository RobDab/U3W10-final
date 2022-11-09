import { Component, OnInit } from '@angular/core';
import { ToDo } from '../classes/to-do';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss']
})
export class ToDoListPage implements OnInit {

  todoList: ToDo[] = []
  constructor(private todolistservice: ToDoServiceService) {
    this.todoList = this.todolistservice.todoList
   }

  ngOnInit(): void {
  }

  addToDo(task: string){
    this.todolistservice.addToDo(task)
  }
  
  completeTask(task: ToDo){
    this.todolistservice.completeTask(task)
  }

}
