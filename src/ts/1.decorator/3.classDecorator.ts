export {};

// 带参数的类装饰器
function FirstClassDecorator(params: any) {
	return function (targetClass: any) {
		let targetClassObj = new targetClass();
		targetClassObj.buy();
		console.log("targetClass.name:", targetClass.name,params);
	};
}

@FirstClassDecorator('dsds')
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
