export {};

function LoggerInfoDecorator<T extends { new (...args: any[]): any }>(
	targetClass: T
) {
	console.log("targetClass", targetClass);

	return class extends targetClass {
		constructor(...args: any) {
			super(args);
			console.log("log info....targetClass:", (targetClass as any).name);
		}
		methodone() {
			console.log("methodone", this.name);
		}
	};
}

@LoggerInfoDecorator
class Test {
	name!: string;
	age!: number;
	constructor(name: string) {
		this.name = name;
		console.log("执行");
	}
	eat() {
		console.log(this.name, "吃饭");
	}
}
