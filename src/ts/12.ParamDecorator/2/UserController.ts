import { InjectConstructor } from "./InjectConstructorDecorator";
import UserService from "./UserService";
import collectionInstance from "./Collection";

class UserController {
	constructor(
		@InjectConstructor("userService")
		private userService?: UserService,
		private count?: string
	) {}
	public login() {
		let peopleServiceInstance = collectionInstance.get("userService");
		peopleServiceInstance.login();
	}
}

let controller = new UserController()
controller.login()