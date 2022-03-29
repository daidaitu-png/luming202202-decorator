export {};

function Customer() {
	this.custname = "lisi";
}

Customer.prototype.buy = function (things) {
	console.log(this.custname, " buy。。。");
	console.log(things);
};

const StringUtil = {
	trimSpace(arg: string) {
		// return arg.trim();
		return arg.replace(/\s*/g, "");
	},
};

let dataprops = Object.getOwnPropertyDescriptor(Customer.prototype, "buy");
let datapropsmethod = dataprops.value;
dataprops.value = function (...args: any) {
	args = args.map((arg: any) => {
		if (typeof arg === "string") {
			return StringUtil.trimSpace(arg);
		}
		return arg;
	});
	console.log("args: 前置拦截。。。", args);
	datapropsmethod.call(this, args);
	console.log("  wwdsadd  后置拦截 ");
};

Object.defineProperty(Customer.prototype, "buy", dataprops);

let cust = new Customer();
cust.buy("buydfd");
