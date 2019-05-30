import { TodoInterface, TodoState } from '../interface/todo.interface';

export class Todo implements TodoInterface {
	id: number;
	name: string;
	state: TodoState;

	constructor(id: number, name: string, state: TodoState) {
		this.id = id;
		this.name = name;
		this.state = state;
	}
}
