class UserService {
	constructor() {
		console.log("UserService构造器。。");
	}
	pname: string = "人们";
	public login() {
		console.log(this.pname + "登录。。。。");
	}
}

export default UserService;
