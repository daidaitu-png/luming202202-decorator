import "reflect-metadata";

type MyProDecorator = (
	targetClassPrototype: any,
	propertyKey: string | symbol
) => void;

export function Inject(injectid: string): MyProDecorator {
	return (targetClassPrototype, propertyKey) => {
		let PropClass = Reflect.getMetadata(
			"design:type",
			targetClassPrototype,
			propertyKey
		);
    let PropClassObj = new PropClass()
	};
}
