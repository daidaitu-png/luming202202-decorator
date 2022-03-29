export {};

function LoggerInfoDecorator<T extends { new (...args: any): any }>(
	targetClass: T
) {
	class LoggerSonClass extends targetClass {
		constructor(...args: any) {
			super(...args);
			console.log("log info .... targetClass: ", (targetClass as any).name);
		}
	}
	return LoggerSonClass;
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
test.eat();
