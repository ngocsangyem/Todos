import { Todo } from '../model/todo.model';
import { TodoState } from './todo.interface';

export interface TodoServiceInterface {
	addTask(task: Todo): Todo;
	clearCompleteTask(): void;
	destroyTask(): void;
	allTask(): Todo[];
	activeTask(): Todo[];
	completeTask(): Todo[];
	countTask(count: HTMLElement): string;
	toggleState(todo: Todo): boolean;
}
