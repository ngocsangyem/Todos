import { Todo } from './model/todo.model';
import { TodoState } from './interface/todo.interface';
import { TodoService } from './service/todo.service';

class TodoList {

	private todoService: TodoService;

	constructor(todos: Todo[]) {
		this.todoService = new TodoService(todos);
	}

	todoAddTask(input: string){
		this.todoService.addTask(input);
		this.todoRenderTask();
	}

	todoRenderTask(){
		let todos = this.todoService.getAllTask();
		return this.todoService.render(todos);
	}
	todoInit () {
		let todoInput = <HTMLInputElement>document.getElementById('todoInput');

		todoInput.addEventListener('keypress', e => {
			if (e.key === 'Enter') {
				this.todoAddTask(todoInput.value)
			}
		});
	}
}

let initApp = new TodoList([]);

initApp.todoInit();
