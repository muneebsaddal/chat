import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebaseAuth";

const fetchContactChat = async (user_id: string, activeContact_id: string) => {
	try {
		const q = query(
			collection(
				db,
				"chats",
				user_id,
				"contacts",
				activeContact_id,
				"messages"
			)
		);
		const doc = await getDocs(q);
		// const data = doc.docs[0].data();

		console.log(doc.docs.map((e) => e.data()));
	} catch (err) {
		console.error(err);
	}
};

export { fetchContactChat };
