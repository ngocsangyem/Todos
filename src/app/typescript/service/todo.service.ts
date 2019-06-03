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

	private generateId(): number {
		return (this.id += 1);
	}
	private addTask(task: string): Todo {
		let todo: Todo = {
			id: this.generateId(),
			name: task,
			state: TodoState.Active,
		};
		this.todos.push(todo);
		
		return todo;
	}

	private renderTodo(todoItem: {id: number, name: string, state: TodoState}, container:  HTMLElement): void{
		let html, newHtml;
		html =  `<li class="td__body-task${todoItem.state === 1 ? ' td__body-task--complete' : '' }" data-id="${todoItem.id}" data-state="${todoItem.state === 1 ? 'complete' : 'active'}">
					<input class="td__body-task--toggle" type="checkbox">
					<span>${todoItem.name}</span>
					<button class="td__body-task--destroy"><i class="mdi mdi-window-close"></i></button>
				</li>`
		container.insertAdjacentHTML("beforeend", html)
	}

	clearCompleteTask() {
		this.todos = this.todos.filter(todo => todo.state === TodoState.Complete);
	}

	render(input: string): void{
		let newItem;
		let container = <HTMLElement>document.getElementById('bodyTasks');
		newItem = this.addTask(input);

		this.renderTodo(newItem, container);
	}

	allTask() {
		return this.todos.slice();
	}

	activeTask() {
		return (this.todos = this.todos.filter(
			todo => todo.state === TodoState.Active
		));
	}

	completeTask() {
		return (this.todos = this.todos.filter(
			todo => todo.state === TodoState.Complete
		));
	}

	countTask(count: HTMLElement): string {
		if (this.todos.length > 0) {
			count.style.display = 'block'
		} else {
			count.style.display = 'none'
		}
		return String(this.todos.length);
	}

	toggleState(){
		
	}

	destroyTask() {}
}
