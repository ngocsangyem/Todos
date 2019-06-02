import { Todo } from '../model/todo.model';
import { TodoState } from './todo.interface';

export interface TodoServiceInterface {
	addTask(task: Todo): void;
	clearCompleteTask(): void;
	destroyTask(): void;
	allTask(): Todo[];
	activeTask(): Todo[];
	completeTask(): Todo[];
	countTask(): number;
	toggleState(todo, state: boolean): TodoState;
}
