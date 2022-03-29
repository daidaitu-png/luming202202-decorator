export {};

type Commit = (type: string, payload?: any) => void;

type CustObjType = {
	custname: string;
	degree: number;
	commit: Commit;
};

type funcType = (one: CustObjType, two: string) => void;

class Store<S> {
	state!: S;
	commit!: Commit;
}

let store: Store<string> = {
	state: "sda",
	commit: (type: string, payload: any) => {
		console.log(type, ": ", payload);
	},
};

let { state, commit }: Store<string> = {
	state: "sda",
	commit: (type: string, payload: any) => {
		console.log(type, ": ", payload);
	},
};

store.commit("login", {
	username: "zs",
});

function funcone({ commit }: Store<string>, two: string) {
	commit("funcone=>login", {
		username: "猪八戒",
		address: "beijing",
	});
}

funcone(store, "abs");
