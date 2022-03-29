import "reflect-metadata";

@Reflect.metadata("describe", "都是地球人")
class People {
	@Reflect.metadata("describe", "姓名不能包含非法汉子")
	username = "wangwu";
	@Reflect.metadata("importinfo", "去陶然居号码。。。")
	eat() {}
}


console.log(Reflect.getMetadata('describe',People));

console.log(Reflect.getMetadata('importinfo',People.prototype,"eat"));

