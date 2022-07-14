import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";

import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";

import { app } from "./firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		// checking if the user is already registered
		const q = query(collection(db, "user"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
				photoUrl: user.photoURL,
			});
		}
	} catch (err: any) {
		console.error(err);
	}
};

const loginWithEmailAndPassword = async (email: string, password: string) => {
	try {
		// option: add check if the user is not registered, ask to register first
		await signInWithEmailAndPassword(auth, email, password);
		return true;
	} catch (err: any) {
		return false;
	}
};

const registerWithEmailAndPassword = async (
	name: string,
	email: string,
	password: string
) => {
	try {
		//option: add check if the user is already registered, ask to login or reset password
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (err: any) {
		console.error(err);
		alert(err.message);
	}
};

const passwordResetEmail = async (email: string) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
		return true;
	} catch (err: any) {
		console.error(err);
		alert(err.message);
		return false;
	}
};

const logout = () => {
	signOut(auth);
};

export {
	auth,
	db,
	signInWithGoogle,
	loginWithEmailAndPassword,
	registerWithEmailAndPassword,
	passwordResetEmail,
	logout,
};
