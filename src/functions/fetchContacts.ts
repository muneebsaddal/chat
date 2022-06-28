import { db } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { User } from "firebase/auth";

const fetchContacts = async (
	user: User | null | undefined,
	setContacts: any
) => {
	try {
		const q = query(collection(db, "users"), where("uid", "!=", user?.uid));
		const doc = await getDocs(q);
		const data = doc.docs.map((x) => x.data());

		// filter out duplicate objects from array
		const uniqueContactsList = data.filter(
			(ele, ind) => ind === data.findIndex((elem) => elem.uid === ele.uid)
		);
		setContacts(uniqueContactsList);
	} catch (err) {
		console.error(err);
	}
};

export { fetchContacts };
