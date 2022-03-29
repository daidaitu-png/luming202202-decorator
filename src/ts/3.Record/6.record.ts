export {};

const goodSymid = Symbol("goodid");

interface Goods {
	[goodSymid]: number;
	name: string;
	price: number;
}

const goodList: Goods[] = [
	{
		[goodSymid]: 101,
		name: "apple",
		price: 9,
	},
	{
		[goodSymid]: 102,
		name: "banana",
		price: 3,
	},
	{
		[goodSymid]: 103,
		name: "pine",
		price: 4,
	},
];

type Record<T> = {
	[P in keyof any]: T;
};

type resultGoodsType = Record<Goods>;

let goodRecord: Record<Goods> = {};

goodList.forEach((goods) => {
	goodRecord[goods[goodSymid]] = goods;
});

console.log("goodRecord", goodRecord);
