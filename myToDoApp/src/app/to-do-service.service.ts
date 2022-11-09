import { Injectable } from '@angular/core';
import { ToDo } from './classes/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  todoList: ToDo[]=[
    // {
    //   id: 1,
    //   task: 'task num 1',
    //   completed: false
    // }
  ] 

 

  constructor() { }

  addToDo(task: string){
    let newtask: ToDo = {
      id:this.todoList.length +1,
      task: task,
      completed: false
    }

    this.todoList.push(newtask)
  }

  completeTask(task: ToDo){
    task.completed = true;
    console.log(task)
    
    
  }

  getToDo(){

  }

  putToDO(){

  }
  
}
