export {};

function loginProperty(attrValue: any) {
	return function (targetClassPrototype: object, attrname: string | symbol) {
		console.log("targetClassPrototype: ", targetClassPrototype);
		console.log("attrname: ", attrname);
		(targetClassPrototype.constructor as any).custLevelDescri = function () {
			console.log("消费5000元升级为vip");
			console.log("消费5000元升级为svip,且赠送微波炉一个");
		};
		console.log(
			"targetClassPrototype.custLevelDescri",
			(targetClassPrototype as any).custLevelDescri
		);
	};
}

class CustomerService {
	public custname: string = "Wangwu";

	@loginProperty("顾客登记")
	public degree!: string;
	constructor() {}

	show() {
		console.log("顾客名：", this.custname);
	}
}
(CustomerService as any).custLevelDescri();
