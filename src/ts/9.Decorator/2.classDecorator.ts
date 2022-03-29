export {};

function FirstClassDecorator(targetClass: any) {
	console.log("targetClass.name:", targetClass.name);
	console.log(targetClass.prototype.constructor.name + "信息");

	Object.keys(targetClass.prototype).forEach((methodname) => {
		console.log("方法", methodname);
		let dataprop = Object.getOwnPropertyDescriptor(
			targetClass.prototype,
			methodname
		);
		console.log("方法数据属性：", dataprop);
	});
}

@FirstClassDecorator
class CustomerService {
	name: string = "下单";
	constructor() {}
	buy() {
		console.log(this.name + " buy...");
	}
	placeOrder() {
		console.log(this.name + " order to buy...");
	}
}
