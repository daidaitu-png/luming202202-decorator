export {};

class Test {
	age!: number;
}

let targetClass: any;

class LoggerSonClass extends Test {
	public name: string = "test";
	methodone() {
		console.log("methodone: ", this.name);
	}
}

let TestCopy = Test
TestCopy = LoggerSonClass
