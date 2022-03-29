export {};

function LoggerInfoDecorator<T extends { new (...args: any): any }>(
	targetClass: T
) {
	class LoggerSonClass extends targetClass {
		constructor(...args: any) {
			super(...args);
			console.log("log info....targetClass:", (targetClass as any).name);
		}
		methodone() {
			console.log("methodone:", this.name);
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
		console.log("执行");
	}
	eat() {
		console.log(this.name, "吃饭");
	}
	// methodone() {
	// 	console.log("methodone:", this.name);
	// }
}

let t = new Test("sdd");
(t as any).eat();
(t as any).methodone();

type TestConstructorType = new (...args:any)=>Test
// let LoggerSonClass =LoggerInfoDecorator<TestConstructorType>(Test)
let LoggerSonClass =LoggerInfoDecorator(Test)
let LoggerSonClassInstance = new LoggerSonClass("wangwu")
LoggerSonClassInstance.methodone()
