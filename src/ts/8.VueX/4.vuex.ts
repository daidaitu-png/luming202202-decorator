export {};

type ActionHandler<S, R> = (store: Store<S>, payload?: any) => any;

interface ActionTree<S, R> {
	// [key: string]: (store: Store<S>, payload?: any) => any;
	[key: string]: ActionHandler<S, R>;
}

interface StoreOption<S> {
	state: S;
	// actions: {
	// 	[key: string]: (store: Store<S>, payload?: any) => any;
	// };
	actions: ActionTree<S, S>;
}

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
	constructor(storeOptions: StoreOption<S>) {}
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

let storeOptions: StoreOption<string> = {
	state: "zhaoliu",
	actions: {
		searchFoodHistory() {},
		searchFoodHistory1(store, payload) {
			store.commit("searchFoodHistory1", { id: 100, food: "宫保鸡丁" });
		},
		searchFoodHistory2({ commit }, payload) {
			commit("searchFoodHistory2", { id: 101, food: "酱爆茄子" });
		},
	},
};

function createStore<S>(storeOptions: StoreOption<S>) {
	return new Store<S>(storeOptions);
}

createStore(storeOptions)
