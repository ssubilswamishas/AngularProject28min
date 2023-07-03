import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retriveAllTodos(username : any){
    return this.http.get<Todo []>(`http://localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }
  retriveTodos(username : any , id : any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    //console.log("Execute Hello World Bean Service")
  }

  updateTodo(username : any , id : any , todo: any){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}` , todo);
    //console.log("Execute Hello World Bean Service")
  }
  createTodo(username : any , todo: any){
    return this.http.post(`http://localhost:8080/users/${username}/todos` , todo);
    //console.log("Execute Hello World Bean Service")
  }
  deleteTodo(username : any , id : any){

    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    //console.log("Execute Hello World Bean Service")
  }


 
}
