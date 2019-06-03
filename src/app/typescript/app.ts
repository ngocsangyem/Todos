import { Todo } from './model/todo.model';
import { TodoState } from './interface/todo.interface';
import { TodoService } from './service/todo.service';

class TodoList {
	
	private todoService: TodoService;

	
	constructor(todos: Todo[]) {
		this.todoService = new TodoService(todos);
	}

	todoToggleState(){
		this.todoService.toggleState();
		// this.renderTodos();
	}

	todoCountTask(count: HTMLElement): string{
		return this.todoService.countTask(count);
	}

	todoAddTask(input: string){
		this.todoService.render(input);
	}

	todoInit(){
		let todoInput = <HTMLInputElement>document.getElementById('todoInput');
		let todoFooter = <HTMLElement>document.querySelector('.td__footer');
		let todoCount = <HTMLElement>document.querySelector('.td__header-count');
		let todoToggle = document.getElementsByClassName('td__body-task');

		todoInput.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				this.todoAddTask(todoInput.value);
				todoInput.value = ''
				todoFooter.style.display = 'flex';
				todoCount.innerHTML = this.todoCountTask(todoCount);
			}
		});

		document.addEventListener('click', event => {
			if ((<HTMLElement>event.target).classList.contains('td__body-task')) {
				console.log(123);
				this.todoToggleState();
			}
		}, false)
	}
}

let todoApp = new TodoList([])

todoApp.todoInit();

