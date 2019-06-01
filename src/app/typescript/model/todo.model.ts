import { TodoState } from '../interface/todo.interface';

export class Todo {
	id: number;
	name: string;
	state: TodoState;

	constructor(id: number, name: string, state: TodoState) {
		this.id = id;
		this.name = name;
		this.state = state;
	}

	private renderTodo(todo){
		return `<li class="td__body-task" data-id="${todo.id}">
					<label for="">
						<input class="td__body-task--toggle" type="checkbox" name=""><span>${todo.name}</span>
						<button class="td__body-task--destroy"><i class="mdi mdi-window-close"></i></button>
					</label>
				</li>`
	}
}
