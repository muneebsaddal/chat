import { Layout } from "antd";
import styled from "styled-components";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "./config/firebase";

import "./App.css";
import ProfileHeaderComp from "./components/ProfileHeaderComp";
import ContactSearchComp from "./components/ContactSearchComp";
import ContactListComp from "./components/ContactListComp";
import ChatHeaderComp from "./components/ChatHeaderComponents";
import TypingSectionComp from "./components/TypingSectionComp";

const { Header, Footer, Sider, Content } = Layout;

firebase.initializeApp({
	apiKey: "AIzaSyB9nCVQsEzp5s_FjgvBRVHh90CCRGvxY4c",
	authDomain: "chat-ac983.firebaseapp.com",
	projectId: "chat-ac983",
	storageBucket: "chat-ac983.appspot.com",
	messagingSenderId: "751259258650",
	appId: "1:751259258650:web:01922d4e9665e2a77266a3",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App: React.FC = () => {
	const [user] = useAuthState(auth as any);
	console.log(user);

	return (
		<>
			<Container>
				<Sidebar width={400}>
					<ProfileHeader>
						<ProfileHeaderComp />
					</ProfileHeader>
					<ContactSearch>
						<ContactSearchComp />
					</ContactSearch>
					<ContactList>
						<ContactListComp />
					</ContactList>
					<button onClick={logout}>Log out</button>
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
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;

const ProfileHeader = styled(Header)`
	background: none;
	padding: 0px;
	margin: 0px;
`;

const ContactSearch = styled(Header)`
	background: none;
	padding: 5px 25px;
	height: 40px;
`;

const ContactList = styled(Content)`
	margin: 10px;
`;

const Chat = styled(Layout)`
	background: #ffffff;
	margin: 0px 0px 0px 20px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
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
