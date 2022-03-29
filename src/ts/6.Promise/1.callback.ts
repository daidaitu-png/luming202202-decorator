export {};

type func1Type = (one: number, two: string) => string;
type func2Type = (one: number) => string;

type beginType1 = func1Type extends func2Type ? func1Type : never;
type beginType2 = func2Type extends func1Type ? func2Type : never;

type extractType1 = Extract<func1Type, func2Type>;
type extractType2 = Extract<func2Type, func1Type>;

let func1: func1Type = (one, two) => {
	return "ad";
};
let func2: func1Type = () => {
	return "ad";
};
func2(1, "s");

function testFunc(func: func1Type) {
	func(1, "s");
}
testFunc(function () {
	return "abc";
});
