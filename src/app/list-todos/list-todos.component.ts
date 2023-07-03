import { Component , OnInit} from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(
     public id : number,
    public description : String,
    public done : boolean,
    public targetDate : Date){
   
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message : string | undefined

  todos: Todo[] = [];
  // todos = [
  //   new Todo(1 , 'Learn Java' , true , new Date()),
  //   new Todo(2,'Learn Python ' , false , new Date()),
  //   new Todo(3, 'Learn Angular' , false , new Date())

  // ]

  constructor(private todoService : TodoDataService , private router : Router){

  }
  ngOnInit() {
      this.refreshTodos();
    
  }

  refreshTodos(){

    this.todoService.retriveAllTodos('subil').subscribe(

      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any){

    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('subil', id).subscribe(

      response => {console.log(response);

        this.message = `Delete of Todo ${id} successfull!`
      
      this.refreshTodos();

      }
    )
  }

  addTodo(){
    console.log('Todo added')

    this.router.navigate(['todos' , -1])
  }
  updateTodo(id : any){

    console.log(`update ${id}`);

    this.router.navigate(['todos' , id])
  }

  

}
