import "reflect-metadata";

function ControllerDecorator(rootPath: string) {
	return function <T extends { new (...args: any): any }>(targetClass: T) {
		console.log("targetClass: ", targetClass);
		Object.keys(targetClass.prototype).forEach((methodname) => {
			let reqPath = Reflect.getMetadata(
				"path",
				targetClass.prototype,
				methodname
			);
			console.log("reqPath:", reqPath);
		});
	};
}

export default ControllerDecorator;
