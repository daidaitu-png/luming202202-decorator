export {};

type CustObjType = {
	custname: string;
	degree: number;
};

let custobj: CustObjType = {
	custname: "sd",
	degree: 12,
};

let { custname, degree } = custobj;

function func(custobj: CustObjType) {
	console.log(custobj.custname);
}

func({ custname: "wangwu", degree: 12 });
