export {};

type Worker = {
	custname: string;
};

type Customer = {
	custname: string;
	age: number;
	phone: string;
};

type Record<K extends keyof any, T> = {
	[P in "username" | "age"]: T;
};

type resultRecord = Record<string, Customer>;

let obj: resultRecord = {
	username: {
		custname: "ww",
		age: 12,
		phone: "123456",
	},
	age: {
		custname: "ls",
		age: 12,
		phone: "123456",
	},
};
