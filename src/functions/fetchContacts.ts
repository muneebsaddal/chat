import { db } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { User } from "firebase/auth";

const uniqueFilter = (value: any, index: any, self: string | any[]) => {
	return self.indexOf(value) === index;
};

const fetchContacts = async (
	user: User | null | undefined,
	setContacts: any
) => {
	try {
		const q = query(collection(db, "users"), where("uid", "!=", user?.uid));
		const doc = await getDocs(q);
		const data = doc.docs.map((x) => x.data());
		console.log(data.filter(uniqueFilter));
		setContacts(data.filter(uniqueFilter));
	} catch (err) {
		console.error(err);
	}
};

export { fetchContacts };
