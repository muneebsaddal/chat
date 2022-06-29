export {};

declare global {
	interface Contact {
		authProvider: string;
		email: string;
		name: string;
		photoUrl?: string;
		uid: string;
	}
}
