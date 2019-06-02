import { Todo } from './model/todo.model';
import { TodoState } from './interface/todo.interface';
import { TodoService } from './service/todo.service';

class TodoList {
	
	private todoService: TodoService;

	
	constructor(todos) {
		this.todoService = new TodoService(todos);
		// this.todoInit()
	}
	
	todoAddTask(task){
		this.todoService.addTask(task);
		this.renderTodos();
	}

	todoToggleState(todo,state: boolean){
		this.todoService.toggleState(todo,state);
	}


	renderTodos(){
		let container = <HTMLElement>document.getElementById('bodyTasks');
		let todos = this.todoService.allTask();
		this.todoService.render(todos,container);
	}

	todoInit(){
		let todoInput = <HTMLInputElement>document.getElementById('todoInput');
		let todoFooter = <HTMLElement>document.querySelector('.td__footer');
		let todoToggle = <HTMLInputElement>document.querySelector('.td__body-task--toggle');

		todoInput.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				this.todoAddTask(todoInput.value);
				todoInput.value = ''
				todoFooter.style.display = 'flex';
			}
		});

		

		
		
	}
}

let todoApp = new TodoList([])

todoApp.todoInit();

