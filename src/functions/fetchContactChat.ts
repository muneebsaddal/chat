import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebaseAuth";

const fetchContactChat = async (
	user_id: string,
	activeContact_id: string,
	setChat: any
) => {
	try {
		const queryForSentMessages = query(
			collection(
				db,
				"chats",
				user_id,
				"contacts",
				activeContact_id,
				"messages"
			)
		);
		const docForSentMessages = await getDocs(queryForSentMessages);
		const dataForSentMessages = docForSentMessages.docs.map((e: any) =>
			e.data()
		);

		const queryForReceivedMessages = query(
			collection(
				db,
				"chats",
				activeContact_id,
				"contacts",
				user_id,
				"messages"
			)
		);
		const docForReceivedMessages = await getDocs(queryForReceivedMessages);
		const dataForReceivedMessages = docForReceivedMessages.docs.map(
			(e: any) => e.data()
		);

		const messages = dataForSentMessages.concat(dataForReceivedMessages);

		setChat(messages);
	} catch (err) {
		console.error(err);
	}
};

export { fetchContactChat };
