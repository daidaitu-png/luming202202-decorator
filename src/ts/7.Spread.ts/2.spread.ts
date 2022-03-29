export {};

type CustObjType = {
	custname: string;
	degree: number;
};

type fucnType = (one: number, two: string) => void;

function func(custfunc: fucnType) {
	custfunc(2, "sd");
}

func(() => {
	console.log(123);
});

func((one: number, two: string) => {
	console.log("one: ", one, "two: ", two);
});

type funcType2 = (one: CustObjType, two: string) => void;
let func2: funcType2 = (one: CustObjType, two: string) => {
	console.log(one.custname, ":", two);
};

func2({ custname: "zhangsan", degree: 23 }, "good");

let func3 = (func2: funcType2) => {
	func2({ custname: "lisi", degree: 45 }, "bad");
};

func3((one: CustObjType, two: string) => {
	console.log('func3 ',one.custname, ":", two);
});

func3(({degree}: CustObjType, two: string) => {
	console.log('func3 ',degree, ":", two);
});