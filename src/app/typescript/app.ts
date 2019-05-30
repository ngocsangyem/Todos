import { Todo } from "./model/todo.model";
import { TodoState } from "./interface/todo.interface";


class TodoList {
	public tasks: Todo[] = [];

	createTask (id: number, name: string, state: TodoState): number {
		let newTask = new Todo(id, name, state);
		let pushTask = this.tasks.push(newTask);
		return pushTask;
	}

	allTasks() {
		return this.tasks;
	}
}


window.onload = function () {
	let task = <HTMLInputElement>document.getElementById('todoInput');

	task.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			creatTaskFunc(task.value)
		}
	})
}

function creatTaskFunc(name: string) {
	console.log(name);
}



