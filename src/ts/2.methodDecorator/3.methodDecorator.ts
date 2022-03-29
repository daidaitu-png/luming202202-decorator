export {};

class StringUtil {//工具类

  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "")
  }

}

// 带参数的方法装饰器

function MyMethodDecorator(methodPath: string) {
	return function (
		targetClassPrototype: any,
		methodname: string,
		methodDescri: PropertyDescriptor
	) {
    console.log("前置拦截。。。。。");
    
		methodDescri.value();
    methodDescri.value=function(...args:any){
      args=args.map((arg:any)=>{
        if(typeof arg==="string"){
          return StringUtil.trimSpace(arg)
        }
        return arg
      })
      console.log("args:",args);
      
    }
    methodDescri.value("i am    dafu  ")
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
