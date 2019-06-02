import { Todo } from '../model/todo.model';
import { TodoState } from '../interface/todo.interface';
import { TodoServiceInterface } from '../interface/todoservice.interface';

let id = 0;

function generateId(): number {
	return (id += 1);
}

export class TodoService implements TodoServiceInterface {
	private todos: Todo[] = [];

	constructor(todos: string[]) {}

	addTask(task): Todo {
		let todo: Todo = {
			id: generateId(),
			name: task,
			state: TodoState.Active,
		};
		this.todos.push(todo);
		
		return todo;
	}

	clearCompleteTask() {
		this.todos = this.todos.filter(todo => todo.state === TodoState.Active);
	}

	destroyTask() {}

	allTask() {
		return this.todos;
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

	countTask() {
		return this.todos.length;
	}

	toggleState(todo, state: boolean): TodoState{
		if (!state) {
			return todo.state = TodoState.Active;
		}
		return todo.state = TodoState.Complete;
	}
	private renderTodo(todoItem: {id: number, name: string, state: TodoState}){
		// console.log(todoItem);
		return `<li class="td__body-task" data-id="${todoItem.id}" data-state="${this.toggleState(todoItem, false)}">
					<label for="">
						<input class="td__body-task--toggle" type="checkbox" ${this.toggleState}><span>${todoItem.name}</span>
						<button class="td__body-task--destroy"><i class="mdi mdi-window-close"></i></button>
					</label>
				</li>`
	}

	render(todos: Todo[], container: HTMLElement){
		for (let todo in todos) {
			let element = todos[todo];
			if (element.id === id) {
				container.insertAdjacentHTML("beforeend", this.renderTodo(element))
			}
		}
	}
}
