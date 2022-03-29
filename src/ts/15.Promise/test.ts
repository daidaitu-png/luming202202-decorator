import Promise from "./Promise";

let promise = new Promise((res, rej) => {
	res("成功了。。。");
	rej("失败了。。。");
});

promise
	.then(
		(resolveData1) => {
			console.log("resolve执行成功后的then函数内的输出：", resolveData1);
      return "ok1"
		},
		(rejectData1) => {
			console.log("reject执行成功后的then函数内的输出：", rejectData1);
      return "fail1"
		}
	)
	.then(
		(resolveData2) => {
			console.log("resolve执行成功后的then函数内的输出：", resolveData2);
      return "ok2"
		},
		(rejectData2) => {
			console.log("reject执行成功后的then函数内的输出：", rejectData2);
      return "fail2"
		}
	);
