import { Todo } from '../model/todo.model';
import { TodoState } from './todo.interface';

export interface TodoServiceInterface {
	addTask(task: Todo): Todo;
	clearCompleteTask(): void;
	destroyTask(): void;
	allTask(): void;
	activeTask(): TodoState;
	completeTask(): TodoState;
	countTask(): number;
}
