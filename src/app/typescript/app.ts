import { Todo } from './model/todo.model';
import { TodoState } from './interface/todo.interface';
import { TodoService } from './service/todo.service';

class TodoList {
	
	private todoService: TodoService;

	
	constructor(todos: Todo[]) {
		this.todoService = new TodoService(todos);
	}


	todoCountTask(): string{
		let todoCount = <HTMLElement>document.querySelector('.td__header-count');
		return todoCount.innerHTML = this.todoService.countTask(todoCount);
	}

	todoAddTask(input: string){
		this.todoService.render(input);
	}

	todoDeleteTask(index: string) {
		return this.todoService.deleteTask(index);
	}

	todoInit(){
		let todoInput = <HTMLInputElement>document.getElementById('todoInput');
		let todoFooter = <HTMLElement>document.querySelector('.td__footer');
		let todoTaskWrapper = <HTMLElement>document.getElementById('bodyTasks');

		todoInput.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				this.todoAddTask(todoInput.value);
				todoInput.value = ''
				todoFooter.style.display = 'flex';
				this.todoCountTask();
			}
		});

		todoTaskWrapper.addEventListener('click', (event) => {
			let parentId = (<HTMLElement>event.target).parentNode.parentNode.id;
			let parentTask = (<HTMLElement>event.target).parentNode.parentNode;
			this.todoDeleteTask(parentId);
			todoTaskWrapper.removeChild(parentTask);
			this.todoCountTask();

		})
	}
}

let todoApp = new TodoList([])

todoApp.todoInit();

