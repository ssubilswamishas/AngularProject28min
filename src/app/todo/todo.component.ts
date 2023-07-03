import { Component , OnInit} from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  id : number = 0

  todo: Todo = new Todo(this.id, '', false, new Date());

  saveTodo(){

    if(this.id == -1){

      this.todoDataService.createTodo('Subil' , this.todo).subscribe(

        data => {

          console.log(data)
        this.router.navigate(['todos'])

        }


      )

    }else{
    
    this.todoDataService.updateTodo('Subil' , this.id , this.todo).subscribe(

      data => {
        console.log(data)
        this.router.navigate(['todos'])

      }

    )
    }
  }

  constructor( private todoDataService : TodoDataService , private route : ActivatedRoute , private router : Router){
    
  }

  ngOnInit() {
      
    this.id  = this.route.snapshot.params['id']

   if(this.id != -1){
    this.todoDataService.retriveTodos('Subil' , this.id).subscribe(
      data => this.todo = data
    )
   }

    

  }

}
