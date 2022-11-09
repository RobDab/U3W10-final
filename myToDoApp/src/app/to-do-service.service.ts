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

  taskCompleted: ToDo[] = []
  //? PER QUESTA LISTA DI TASK COMPLETATE SAREBBE STATO MEGLIO UN'ALTRO SERVICE?
 

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
    this.taskCompleted.push(task)
    // console.log(this.taskCompleted) 

    //?COME SVUOTARE IL VALUE DELL'INPUT ONSUBMIT??
  }

  deleteTask(task: ToDo){
    // console.log(task)
    this.todoList.splice( this.todoList.indexOf(task), 1) /* ELIMINA GLOBALMENTE LA TASK DAL SERVICE */
    
  }
 
}
