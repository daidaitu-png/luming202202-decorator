export {};

function FirstClassDecorator(params: any) {
	return function (targetClass: any) {
		let targetClassObj = new targetClass();
		targetClassObj.buy();
		console.log("targetClass.name:", targetClass.name);
	};
}

@FirstClassDecorator(45)
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
