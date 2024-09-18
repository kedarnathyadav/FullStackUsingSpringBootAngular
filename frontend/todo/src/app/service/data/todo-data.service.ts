import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { TODO_JPA_API_URL } from '../../app.constants';
  
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient
  ) { }

  retrieveAlltodos(username : any){

    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);

    // console.log("Execute Hello World Bean Service");
}


deleteTodo(username: any, id: any){
  return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
}

retrieveTodo(username: any, id: any){
  return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
}


updateTodo(username: any, id: any, todo : Todo){
  return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
}

createTodo(username: string, todo: Todo) {
  return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo, {
    headers: { 'Content-Type': 'application/json' }
  });
}



}
