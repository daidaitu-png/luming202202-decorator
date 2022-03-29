export {};

type Commit = (type: string, payload?: any) => void;

type CustObjType = {
	custname: string;
	degree: number;
	commit: Commit;
};

type funcType = (one: CustObjType, two: string) => void;

let custobj: CustObjType = {
	custname: "sda",
	degree: 65,
	commit: (type: string, payload: any) => {
		console.log(type, ": ", payload);
	},
};

custobj.commit("login", {
	username: "zs",
});

function funcone({ commit }: CustObjType, two: string) {
	commit("funcone=>login", {
		username: "猪八戒",
		address: "beijing",
	});
}

funcone(custobj, "abs");
