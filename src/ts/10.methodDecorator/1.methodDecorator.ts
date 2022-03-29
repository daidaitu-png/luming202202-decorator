export {};

/**
 * 
 * @param targetClassPrototype [RoleService.prototype]
 * @param key 
 * @param methodDecri 
 */
function MyMethodDecorator(
	targetClassPrototype: any,
	key: string,
	methodDecri: PropertyDescriptor
) {
	console.log("targetClassPrototype: ", targetClassPrototype);
	console.log("key:", key);
	console.log("数据属性:", methodDecri);
}

class RoleService {
	public rolename: string = "管理员";
	constructor() {}
	@MyMethodDecorator
	DistribRoles() {
		console.log("分配角色。。。。");
	}
}
