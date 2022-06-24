import { useEffect, useState } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./config/firebase";
import {
	query,
	collection,
	getDocs,
	where,
	Firestore,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";
import styled from "styled-components";
import "./App.css";

import ProfileHeaderComp from "./components/ProfileHeaderComp";
import ContactSearchComp from "./components/ContactSearchComp";
import ContactListComp from "./components/ContactListComp";
import ChatHeaderComp from "./components/ChatHeaderComponents";
import TypingSectionComp from "./components/TypingSectionComp";

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState<string>("");
	const [userPhoto, setUserPhoto] = useState<string>("");
	const navigate = useNavigate();

	const fetchUserName = async () => {
		try {
			const q = query(
				collection(db, "users"),
				where("uid", "==", user?.uid)
			);
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
			setUserPhoto(data.photoUrl);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		if (loading) return;
		!user && navigate("/");
		fetchUserName();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);

	const logoutUser = () => {
		logout();
		navigate("/");
	};

	return (
		<>
			<Container>
				<Sidebar width={400}>
					<ProfileHeader>
						<ProfileHeaderComp name={name} userPhoto={userPhoto} />
					</ProfileHeader>
					<ContactSearch>
						<ContactSearchComp />
					</ContactSearch>
					<ContactList>
						<ContactListComp />
					</ContactList>
					<button id="logout" onClick={logoutUser}>
						Log out
					</button>
				</Sidebar>

				<Chat>
					<ChatHeader>
						<ChatHeaderComp />
					</ChatHeader>
					<Messages></Messages>
					<TypingSection>
						<TypingSectionComp />
					</TypingSection>
				</Chat>
			</Container>
		</>
	);
};

export default App;

const Container = styled(Layout)`
	background: #ffffff;
	padding: 1%;
	height: 100vh;
`;

const Sidebar = styled(Sider)`
	background: #ffffff;
	box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.25);
	border-radius: 2px 0px 0px 2px;
`;

const ProfileHeader = styled(Header)`
	background: none;
	padding: 0px;
	margin: 0px;
`;

const ContactSearch = styled(Header)`
	background: none;
	padding: 10px 25px;
	height: 50px;
`;

const ContactList = styled(Content)`
	margin: 10px;
`;

const Chat = styled(Layout)`
	background: #ffffff;
	// margin: 0px 0px 0px 20px;
	box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
	border-radius: 0px 2px 2px 0px;
`;

const ChatHeader = styled(Header)`
	background: none;
	margin: 0px;
	padding: 0px;
`;

const Messages = styled(Content)`
	background: #8babd8;
	margin: 0px;
	padding: 0px;
`;

const TypingSection = styled(Footer)`
	background: none;
	margin: 0px;
	padding: 0px;
`;
