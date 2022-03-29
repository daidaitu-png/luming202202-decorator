export {};

const goodSymid = Symbol("goodid");

interface Goods {
	[goodSymid]: number;
	name: string;
	price: number;
}

type Record<K extends keyof any, T> = {
	[P in K]: T;
};

type resultGoodsType = Record<number, Goods>;

let goodRecord: Record<number, Goods> = {};
let good: Goods = {
	[goodSymid]: 101,
	name: "apple",
	price: 9,
};

goodRecord[good[goodSymid]] = good;
console.log("goodRecord", goodRecord);
