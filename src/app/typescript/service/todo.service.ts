import { Todo } from '../model/todo.model';
import { TodoState } from '../interface/todo.interface';
import { TodoServiceInterface } from '../interface/todoservice.interface';

function generateId(): number {
	let id = 0;
	return (id += 1);
}

export class TodoService implements TodoServiceInterface {
	todos: Todo[] = [];

	addTask(): Todo {
		let todo = {
			id: generateId(),
			name: '',
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
}
