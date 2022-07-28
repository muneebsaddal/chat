import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/auth";

const fetchChat = async (user_id: string, activeContact_id: string) => {
	const messages: any[] = [];

	return onSnapshot(
		collection(
			db,
			"chats",
			user_id,
			"contacts",
			activeContact_id,
			"messages"
		),
		(querySnapshot) => {
			querySnapshot.forEach((doc) => {
				messages.push(doc.data());
			});
			console.log(messages);
			return messages;
		}
	);
};

export { fetchChat };
