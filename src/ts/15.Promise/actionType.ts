type ResolveType = (resolve: any) => any;
type RejectType = (reject: any) => any;

type Executor = (resolve: ResolveType, reject: RejectType) => void;

export { ResolveType, RejectType, Executor };
