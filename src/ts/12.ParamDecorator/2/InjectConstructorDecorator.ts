import "reflect-metadata";
import collectionInstance from "./Collection";

type MyParameterDecorator = (
	target: Object,
	paramname: string | symbol,
	paramIndex: number
) => void;

export function InjectConstructor(injectid?: string): MyParameterDecorator {
	return (target, paramname, index) => {
		const InjectConstructorClass = Reflect.getMetadata(
			"design:paramtypes",
			target
		);
		console.log("InjectConstructorClass: ", InjectConstructorClass);
		let InjectConstructorClassObj = new InjectConstructorClass[index]();
		collectionInstance.set(injectid, InjectConstructorClassObj);
	};
}
