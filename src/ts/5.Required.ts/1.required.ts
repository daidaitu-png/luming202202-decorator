export {};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
	title: string;
	completed: boolean;
	description: string;
	other?: string;
	data?: Date;
}

let todoItem: Required<Todo> = {
	title: "sdasasd",
	completed: true,
	description: "123",
	other: "4",
	data: new Date(),
};
