function UrlParam(params: any) {
	return function paramDecorator(
		targetClassPrototype: any,
		methodname: string,
		paramindex: number
	) {
		console.log("targetClassPrototype: ", targetClassPrototype);
		console.log("methodname: ", methodname);
		console.log("paramindex: ", paramindex);
		targetClassPrototype.info = params;
	};
}

class People {
	eat(address: string, @UrlParam("地址信息") who: string) {
		console.log("address:", address);
	}
}
