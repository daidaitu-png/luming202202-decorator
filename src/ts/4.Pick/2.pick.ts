export {};

type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};

type Record<T> = {
	[P in keyof any]: T;
};

interface Todo {
	title: string;
	completed: boolean;
	description: string;
}

let todoList: Todo[] = [
	{
		title: "sdasasd",
		completed: true,
		description: "123",
	},
	{
		title: "sa",
		completed: false,
		description: "456",
	},
];

type todoRecordType = Record<Todo>;
// type todoRecordPickType = Pick<Todo, "title" | "completed">;

let todoRecord: todoRecordType = {};
// let todoRecordPick: todoRecordPickType;

todoList.map((todo) => {
	todoRecord[todo["title"]] = todo;
});

// todoList.map((todo) => {
// 	todoRecordPick[todo["title"]] = todo;
// });


console.log("todoRecord", todoRecord);
// console.log("todoRecordPick", todoRecordPick);
