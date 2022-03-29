import { UserService } from "./2.UserService";
import { Inject } from "./4.InjectDecorator";
// import RequestMethodDecorator from "./6.MethodDecorator";
import { get } from "./6.MethodDecorator";
// import {PeopleService} from './PeopleService'
import callectionInstance from "./1.Collection";
import Controller from './5.ControllerDecorator'

// 装饰器执行顺序：1.属性装饰器-》2.方法参数装饰器==》3.方法装饰器===》4.类装饰器

@Controller("/")
class UserController {
	@Inject("userService")
	private userService?: UserService;

	// @RequestMethodDecorator("/login")
	@get("/login")
	public login(): void {}
}

export {};
