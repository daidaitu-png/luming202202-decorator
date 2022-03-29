import "reflect-metadata";

let obj = {
	username: "rosefu",
	age: 23,
	info() {
		console.log("info...");
	},
};

Reflect.defineMetadata("metaobjkey", "我是一个对象的元数据", obj);
console.log(Reflect.getMetadata("metaobjkey", obj));

if (Reflect.hasMetadata("metaobjkey", obj)) {
	console.log("obj存在metaobjkey元数据");
}
