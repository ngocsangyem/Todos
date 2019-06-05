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
		return ID;
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

	private renderTodo(todoItem: {id: string, name: string, state: boolean}): void{
		let container = <HTMLElement>document.getElementById('bodyTasks');
		let html: string, newHtml: string, htmlDom;
		html =  `<li class="td__body-task${todoItem.state === true ? ' td__body-task--complete' : '' }" data-id="${todoItem.id}" data-state="${todoItem.state === true ? 'complete' : 'active'}">
					<input class="td__body-task--toggle" type="checkbox">
					<span>${todoItem.name}</span>
					<button class="td__body-task--destroy" data-id="${todoItem.id}"><i class="mdi mdi-window-close"></i></button>
				</li>`
		
		container.insertAdjacentHTML("beforeend", html);

		// let findId = <HTMLElement>document.querySelector(`[data-id="${todoItem.id}"]`)

		// if (findId) {
		// 	findId.addEventListener('click', event => {
		// 		this.toggleState(todoItem);
		// 	})
		// }
		htmlDom = new DOMParser().parseFromString(html, 'text/xml')
		// htmlDom = html.trim();
		console.log(htmlDom.firstChild);
		htmlDom.firstChild.addEventListener('click', function(){
			console.log(123);
		})
		
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

	findTodoId (todoId: number){
		
	}
	toggleState(todo: Todo): boolean{
		todo.state = !todo.state
		return todo.state;
	}

	destroyTask() {}
}
