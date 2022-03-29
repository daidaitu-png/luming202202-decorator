export {};

// 不带参数的类装饰器
function FirstClassDecorator(targetClass: any) {
	console.log(targetClass.prototype.constructor.name + "信息");
	Object.keys(targetClass.prototype).forEach((methodname) => {
		console.log("method:", methodname);
		let dataprop = Object.getOwnPropertyDescriptor(
			targetClass.prototype,
			methodname
		);
		console.log("method-data-attr:", dataprop);
	});
}

@FirstClassDecorator
class CustmerService {
	name: string = "下单";
	constructor() {}
	buy() {
		console.log(this.name + "buy...");
	}
	placeOrder() {
		console.log(this.name + "order to buy..");
	}
}
