import { Todo } from '../model/todo.model';
import { TodoState } from '../interface/todo.interface';
import { TodoServiceInterface } from '../interface/todoservice.interface';



let state = false;
export class TodoService {
	private id: number = 0;
	todos: Todo[] = [];

	constructor(todos: Todo[]) {
		this.todos = todos;
	}

	private generateId(): number {
		return (this.id += 1);
	}

	private toggleState(state: boolean): boolean {
		state = !state;
		console.log(state);
		return state;
	}

	private renderTodo (task: {id: number, name: string, state: boolean}){
		let html, wrapper;
		wrapper = <HTMLElement>document.getElementById('bodyTasks');
		html = `
			<li class="td__body-task${task.state == true ? ' td__body-task--complete' : ''}" data-id="${task.id}" data-state="${task.state == true ? 'complete' : 'active'}">
				<input class="td__body-task--toggle" type="checkbox" name=""><span>${task.name}</span>
				<button class="td__body-task--destroy">
					<i class="mdi mdi-window-close"></i>
				</button>
			</li>
		`
		wrapper.insertAdjacentHTML('beforeend', html);
		let finId = <HTMLElement>document.querySelector(`[data-id="${task.id}"]`)
		if (finId) {
			finId.addEventListener('click', () => {
				console.log(`State before: ${task.state}`);
				
				this.toggleState(task.state);
	
				console.log(`State after: ${task.state}`);
			})
		}
	}

	render(tasks: Todo[]) {
		for (let index = 0; index < tasks.length; index++) {
			let element = tasks[index];
			if (element.id === this.id) {
				this.renderTodo(element);
			}
		}
	}
	addTask(todoName: string){
		let todo: Todo = {
			id: this.generateId(),
			name: todoName,
			state: false
		}
		console.log(this.todos);
		
		this.todos.push(todo)
		return todo;
	}

	getAllTask(): Todo[] {
		let todoFooter = <HTMLElement>document.querySelector('.td__footer')
		if (this.todos.length > 0) {
			todoFooter.style.display = 'flex'
		} else {
			todoFooter.style.display = 'none'
		}
		return this.todos;
	}
}
