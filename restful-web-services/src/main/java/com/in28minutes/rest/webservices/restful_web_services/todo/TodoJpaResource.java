package com.in28minutes.rest.webservices.restful_web_services.todo;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResource {
	@Autowired
	private TodoJpaRepository todoJpaRepository;

	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoJpaRepository.findByUsername(username);
	}
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username, @PathVariable long id) {
		return todoJpaRepository.findById(id).get();
	}

	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {

		Todo todo = todoJpaRepository.findById(id).get();
		
		if (todo != null) {
			 todoJpaRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();

	}
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id,
			@RequestBody Todo todo
			) {
		
				System.out.println(username);
		// Check if the todo with the given id exists
	    Optional<Todo> existingTodo = todoJpaRepository.findById(id);

	    if (!existingTodo.isPresent()) {
	        return ResponseEntity.notFound().build();  // Return 404 if not found
	    }

	    // Update the todo and save
	    todo.setId(id);  // Ensure the ID remains the same
	    todo.setUsername(username);  // Ensure the username remains the same
	    Todo updatedTodo = todoJpaRepository.save(todo);

	    return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK); 
	}
	@PostMapping("/jpa/users/{username}/todos/")
	public ResponseEntity<Void>  createTodo(
			@PathVariable String username,
		    @RequestBody Todo todo
			) {
		todo.setUsername(username);
		Todo createdTodo = todoJpaRepository.save(todo);
		
		//location
		//get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder
		.fromCurrentRequest()
		.path("/{id}")
		.buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
