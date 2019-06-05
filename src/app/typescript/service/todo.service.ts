import { Todo } from '../model/todo.model';
import { TodoState } from '../interface/todo.interface';
import { TodoServiceInterface } from '../interface/todoservice.interface';

let id = 0;

let state = false;
export class TodoService {
	todos: Todo[] = [];

	constructor(todos: Todo[]) {
		this.todos = todos;
	}

	private generateId(): number {
		return (id += 1);
	}

	private renderTodo (task: {id: number, name: string, state: boolean}){
		return `
			<li class="td__body-task${task.state == true ? ' td__body-task--complete' : ''}" data-id="${task.id}" data-state="${task.state == true ? 'complete' : 'active'}">
				<input class="td__body-task--toggle" type="checkbox" name=""><span>${task.name}</span>
				<button class="td__body-task--destroy">
					<i class="mdi mdi-window-close"></i>
				</button>
			</li>
		`
	}

	render(tasks: Todo[]) {
		let wrapper = <HTMLElement>document.getElementById('bodyTasks');

		for (let index = 0; index < tasks.length; index++) {
			let element = tasks[index];
			wrapper.insertAdjacentHTML('beforeend', this.renderTodo(element));
		}
	}
	addTask(todoName: string){
		let todo: Todo = {
			id: this.generateId(),
			name: todoName,
			state: false
		}

		this.todos.push(todo)
		return todo;
	}

	getAllTask(): Todo[] {
		return this.todos;
	}
	
}
