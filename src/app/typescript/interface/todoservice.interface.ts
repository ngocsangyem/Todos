import { Todo } from '../model/todo.model';
import { TodoState } from './todo.interface';

export interface TodoServiceInterface {
	render(task: string): void;
	clearCompleteTask(): void;
	destroyTask(): void;
	allTask(): Todo[];
	activeTask(): Todo[];
	completeTask(): Todo[];
	countTask(count: HTMLElement): string;
	toggleState(todos: Todo[]): void;
}
