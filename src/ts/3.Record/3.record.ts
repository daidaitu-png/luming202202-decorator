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
	[P in K]: T;
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

type resultRecord1 = Record<number, Customer>;

let obj1: resultRecord1 = {
	1: {
		custname: "ww",
		age: 12,
		phone: "123456",
	},
	2: {
		custname: "ls",
		age: 12,
		phone: "123456",
	},
};

let objArr1: resultRecord1 = [
	{
		custname: "ww",
		age: 12,
		phone: "123456",
	},
	{
		custname: "ls",
		age: 12,
		phone: "123456",
	},
];
