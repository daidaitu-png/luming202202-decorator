function LoggerInfoDecorator<T extends { new (...args: any): any }>(
	targetClass: new (...args: any) => Test
) {
	return class extends targetClass {
		constructor(...args: any) {
			super(...args);
			console.log("log info .... targetClass: ", (targetClass as any).name);
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
	}
	eat() {
		console.log(this.name, "eat...");
	}
}

let test = new Test("wer");
(test as any).methodone();
