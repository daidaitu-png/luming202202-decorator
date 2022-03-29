export {};

type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};

interface Book {
	ISBN: string;
	book_name?: boolean;
	book_price: string;
	book_store_count: string;
	book_publish: string;
}

type pickType = Pick<Book, "ISBN" | "book_name">;
