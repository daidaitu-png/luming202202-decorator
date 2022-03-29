export {};

type Worker = {
	custname: string;
};

type Customer = {
	custname: string;
	age: number;
};

type oneType<K> = K extends keyof any ? K : never;

type oneResultType = oneType<Worker>;

let count = 3;
type twoResultType = oneType<typeof count>;

type threeResultType = oneType<3>;

let stuSymid: symbol = Symbol["stuid"];
type fourResultType = oneType<typeof stuSymid>;
