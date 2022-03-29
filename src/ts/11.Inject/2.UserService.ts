export class UserService {
	constructor() {
		console.log("create UserService classobj...");
	}
	pname: string = "人民";
	public login() {
		console.log(this.pname + "loagin....");
	}
}
