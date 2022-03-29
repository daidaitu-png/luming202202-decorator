export {};

interface Error {
	name: string;
	message: string;
	stack?: string;
}

interface SyntaxError extends Error {}

interface CompilerError extends SyntaxError {
	code: number;
	loc?: SourceLocation;
}

export interface SourceLocation {
	start: Position;
	end: Position;
	source: string;
}

export interface Position {
	offset: number;
	line: number;
	column: number;
}
