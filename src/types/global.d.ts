export {};

declare global {
	interface Contact {
		authProvider: string;
		email: string;
		name: string;
		photoUrl?: string;
		uid: string;
	}

	interface Message {
		message: string;
		timestamp: string;
		user_id: string;
		contact_id: string;
	}
}
