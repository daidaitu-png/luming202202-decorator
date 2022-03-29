export {};

const StringUtil = {
	trimSpace(arg: string) {
		// return arg.trim();
		return arg.replace(/\s*/g, "");
	},
};

function MethodInterceptor(params: string) {
	return function (
		targetClassPrototype: any,
		methodname: string,
		dataprops: PropertyDescriptor
	) {
		let datapropsmethod = dataprops.value;
		// console.log("前置拦截。。。");
		// dataprops.value();
		dataprops.value = function (...args: any) {
			args = args.map((arg: any) => {
				if (typeof arg === "string") {
					return StringUtil.trimSpace(arg);
				}
				return arg;
			});
			console.log("args: 前置拦截。。。", args);
			datapropsmethod.call(this, args);
      console.log("  wwdsadd  后置拦截 ");
		};
		// dataprops.value("  wwdsadd  后置拦截 ");
	};
}

class RoleService {
	public rolename: string = "管理员";
	constructor() {}
	@MethodInterceptor("/index")
	DistribRoles(username: string, isValid: boolean) {
		console.log("分配角色。。。。");
	}
}

let roleService = new RoleService();
roleService.DistribRoles("zhangsan", true);
