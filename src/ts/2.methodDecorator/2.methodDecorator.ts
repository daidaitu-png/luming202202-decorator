export {};

// 带参数的方法装饰器

function MyMethodDecorator(methodPath: string) {
	return function (
		targetClassPrototype: any,
		methodname: string,
		methodDescri: PropertyDescriptor
	) {
    console.log("methodPath:",methodPath);
    
		console.log("targetClassPrototype:", targetClassPrototype);
		console.log("key:", methodname);
		console.log("methodDescri:", methodDescri);
		methodDescri.value();
	};
}

class RoleService {
	public rolename: string = "管理员";
	constructor() {}

	@MyMethodDecorator("/searchfood")
	DistriRoles() {
		console.log("分配角色。。");
	}
}
