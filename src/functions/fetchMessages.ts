import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../config/auth";

const fetchMessages = async (user_id: string, activeContact_id: string) => {
	try {
		const messages: any[] = [];

		const sentMessagesQuery = query(
			collection(
				db,
				"chats",
				user_id,
				"contacts",
				activeContact_id,
				"messages"
			)
		);
		const sentMessagesSnapShot = onSnapshot(
			sentMessagesQuery,
			(querySnapshot) => {
				querySnapshot.forEach((doc) => {
					messages.push(doc.data());
				});
			}
		);

		const receivedMessagesQuery = query(
			collection(
				db,
				"chats",
				activeContact_id,
				"contacts",
				user_id,
				"messages"
			)
		);
		const receivedMessagesSnapShot = onSnapshot(
			receivedMessagesQuery,
			(querySnapshot) => {
				querySnapshot.forEach((doc) => {
					messages.push(doc.data());
				});
			}
		);
		return messages;
	} catch (err) {
		console.error(err);
	}
};

export { fetchMessages };
