import { Component, OnInit } from '@angular/core';
import { ToDo } from '../classes/to-do';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  templateUrl: './to-do-completed.page.html',
  styleUrls: ['./to-do-completed.page.scss']
})
export class ToDoCompletedPage implements OnInit {

  tasksCompleted: ToDo[] = []
  constructor(private todolistService : ToDoServiceService) {
    this.tasksCompleted = this.todolistService.taskCompleted
   }

  ngOnInit(): void {
  }

}
