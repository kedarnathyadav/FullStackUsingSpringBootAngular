import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Todo{

  constructor(
  public id: number,
  public description: string,
  public isdone : boolean,
  public targetDate : Date
  ){}

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{


 
  
  todos: Todo[] = [];
  message : string = '';

  // todos = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Learn to code',false,new Date()),
  //   new Todo(3,'Learn angular',false,new Date()),
   
  // ]


  constructor(
    private service: TodoDataService,
    private router : Router
  ) { }

  
  ngOnInit() {
      this.refreshTodos(); 


    }

    refreshTodos() {
      this.service.retrieveAlltodos("in28minutes").subscribe(
        response => {
          console.log(response);
          this.todos = response as Todo[];;
  
        }
  
      )
    }

    deleteTodo(id : any) {
      console.log( `delete todo ${id}`);
      this.service.deleteTodo('in28minutes',id).subscribe(
        response => {
          console.log(response);
          this.message = `Todo with id : ${id} deleted.`;
          this.refreshTodos();
        }
      );
    }

    updateTodo(id : any) {
      console.log(`update ${id}`);
      this.router.navigate(['todos',id]);
    }
    

    addTodo() {
      this.router.navigate(['todos', -1])
    }
 

}
