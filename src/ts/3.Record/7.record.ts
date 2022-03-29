export {};

const goodSymid = Symbol("goodid");

interface Goods {
	[goodSymid]: number;
	name: string;
	price: number;
}

type Record<T> = {
	[P in keyof any]: T;
};

type resultGoodsType = Record<Goods>;

let goodMap=new Map<any,Goods>()
let good:Goods={[goodSymid]:101,name:'apple',price:9}

goodMap.set(103,good)


console.log("goodMap", goodMap);
