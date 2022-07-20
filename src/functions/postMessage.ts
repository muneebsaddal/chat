import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/auth";

const postMessage = async (
	message: string,
	user_id: string,
	activeContact_id: string
) => {
	const timestamp: string = Date.now().toString();
	try {
		await addDoc(
			collection(
				db,
				"chats",
				user_id,
				"contacts",
				activeContact_id,
				"messages"
			),
			{
				message: message,
				timestamp: timestamp,
				user_id: user_id,
				contact_id: activeContact_id,
			}
		);
	} catch (err: any) {
		console.error(err.message);
	}
};

export default postMessage;
