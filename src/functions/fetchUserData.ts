import { db } from "../config/firebaseAuth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

const fetchUserData = async (
	user: User | null | undefined,
	setName: Dispatch<SetStateAction<string>>,
	setUserPhoto: Dispatch<SetStateAction<string>>
) => {
	try {
		const q = query(collection(db, "users"), where("uid", "==", user?.uid));
		const doc = await getDocs(q);
		const data = doc.docs[0].data();
		setName(data.name);
		setUserPhoto(data.photoUrl);
	} catch (err) {
		console.error(err);
	}
};

export { fetchUserData };
