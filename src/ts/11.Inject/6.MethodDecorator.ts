import "reflect-metadata";

type MyMethodDecoratorType = (
	targetClassPrototype: any,
	methodname: string,
	dataprops: PropertyDescriptor
) => void;

export function /*RequestMethodDecorator*/ get(
	reqPath: string
): MyMethodDecoratorType {
	return function (targetClassPrototype, methodname, dataprops) {
		console.log("进入到方法装饰器", "path: ", reqPath);
		Reflect.defineMetadata("path", reqPath, targetClassPrototype, methodname);
	};
}
