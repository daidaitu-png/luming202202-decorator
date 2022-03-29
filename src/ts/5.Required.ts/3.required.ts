export {};

interface Todo {
	title: string;
	completed: boolean;
	description: string;
}

interface AA {
	[props: string]: any;
}

let aa: AA = {
	name: "s",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type excludType = Exclude<keyof Todo, "description">;

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
	title: "1sd",
	completed: false,
};
