import { Executor, RejectType, ResolveType } from "./actionType";

export default class Promise<T = any> {
	public resolve!: ResolveType;
	public reject!: RejectType;
	public status!: string;
	public resolve_executor_value!: any;
	public reject_executor_value!: any;

	constructor(executor: Executor) {
		this.status = "pengding";
		this.resolve = (success_value: any): any => {
			if (this.status === "pengding") {
				this.status = "success";
				this.resolve_executor_value = success_value;
				console.log("resolve==>value: ", success_value);
			}
		};
		this.reject = (fail_value: any): any => {
			if (this.status === "pengding") {
				this.status = "fail";
				this.reject_executor_value = fail_value;
				console.log("reject==>value: ", fail_value);
			}
		};
		try {
			executor(this.resolve, this.reject);
		} catch (error) {
			this.status = "prnding";
			this.reject(error.toString());
			throw new Error("程序终止。。。");
		}
	}
	then(resolveInThen: ResolveType, rejectInThen: RejectType) {
		return new Promise((resolve, reject) => {
			let result;
			if (this.status === "success") {
				result = resolveInThen(this.resolve_executor_value);
				console.log("成功的result：", result);

				console.log("resolveInThen被执行。。");
			}
			if (this.status === "fail") {
        result = rejectInThen(this.reject_executor_value);
				console.log("失败的result：", result);
				
				console.log("rejectInThen被执行。。");
			}
		});
	}
}
