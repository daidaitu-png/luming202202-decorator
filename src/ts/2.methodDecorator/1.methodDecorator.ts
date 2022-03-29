export {};

function MyMethodDecorator(
	targetClassPrototype: any,
	methodname: string,
	methodDescri: PropertyDescriptor
) {
	console.log("targetClassPrototype:", targetClassPrototype);
	console.log("key:", methodname);
	console.log("methodDescri:", methodDescri);
	methodDescri.value();
}

class RoleService {
	public rolename: string = "管理员";
	constructor() {}

	@MyMethodDecorator
	DistriRoles() {
		console.log("分配角色。。");
	}
}
