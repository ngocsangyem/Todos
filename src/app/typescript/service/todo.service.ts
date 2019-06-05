import { Todo } from '../model/todo.model';
import { TodoState } from '../interface/todo.interface';
import { TodoServiceInterface } from '../interface/todoservice.interface';


let state = false;
export class TodoService implements TodoServiceInterface {
	// state: boolean = false;
	private id: number = 0;
	private todos: Todo[] = [];

	constructor(todos: Todo[]) {
	}

	private generateId(length: number): string {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
		let ID = '';
		for (let i = 0; i < length; i += 1) {
			ID += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return 'task-' + ID;
	}
	private addTask(task: string): Todo {
		let todo: Todo = {
			id: this.generateId(4),
			name: task,
			state: false,
		};
		this.todos.push(todo);
		console.log(this.todos);
		
		return todo;
	}

	private renderTodo(task: {id: string, name: string, state: boolean}): void{
		let container = <HTMLElement>document.getElementById('bodyTasks');
		let html: string, newHtml: string, htmlDom;
		html =  `<li class="td__body-task${task.state === true ? ' td__body-task--complete' : '' }" data-id="${task.id}" data-state="${task.state === true ? 'complete' : 'active'}">
					<input class="td__body-task--toggle" type="checkbox">
					<span>${task.name}</span>
					<button class="td__body-task--destroy" data-id="${task.id}"><i class="mdi mdi-window-close"></i></button>
				</li>`
		
		container.insertAdjacentHTML("beforeend", html);

		let findId = <HTMLElement>document.querySelector(`[data-id="${task.id}"]`)

		if (findId) {
			findId.addEventListener('click', event => {
				this.toggleState(task);
				findId.remove()
				this.renderTodo(task)
			})
		}
		
	}
	
	render(input: string): void{
		let newItem;
		newItem = this.addTask(input);
		console.log(newItem);

		this.renderTodo(newItem);
	}
	clearCompleteTask() {
		this.todos = this.todos.filter(todo => todo.state === true);
	}

	allTask() {
		return this.todos.slice();
	}

	activeTask() {
		return (this.todos = this.todos.filter(
			todo => todo.state === false
		));
	}

	completeTask() {
		return (this.todos = this.todos.filter(
			todo => todo.state === true
		));
	}

	countTask(countElement: HTMLElement): string {
		if (this.todos.length > 0) {
			countElement.style.display = 'block';
		} else {
			countElement.style.display = 'none';
		}
		return String(this.todos.length);
	}

	renderAfterClick (todo, container){
		for (todo in this.todos) {
			if (this.todos.hasOwnProperty(todo)) {
				let element = this.todos[todo];
				if (element.id) {
					container.insertAdjacentHTML('beforeend', this.renderTodo(element))
				}
			}
		}
	}
	toggleState(todo: Todo): boolean{
		todo.state = !todo.state
		return todo.state;
	}

	destroyTask() {}
}
