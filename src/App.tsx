import { useEffect, useState } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./config/auth";
import { useNavigate } from "react-router-dom";

import { Layout } from "antd";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import "./App.css";
import "./_variables.scss";

import ProfileHeaderComp from "./components/ProfileHeaderComp";
import ContactSearchComp from "./components/ContactSearchComp";
import ContactListComp from "./components/ContactListComp";
import ChatHeaderComp from "./components/ChatHeaderComp";
import TypingSectionComp from "./components/TypingSectionComp";

import { fetchUserData } from "./functions/fetchUserData";
import { fetchContacts } from "./functions/fetchContacts";
import MessagesComp from "./components/MessagesComp";

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState<string>("");
	const [userPhoto, setUserPhoto] = useState<string>("");
	const [contacts, setContacts] = useState<[]>([]);
	const [activeContact, setActiveContact] = useState<Contact | undefined>();

	const [flagForChatFetch, setFlagForChatFetch] = useState<number>(0);
	const [runFetchMessage, setFetchMessage] = useState<boolean>(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (loading) return;
		!user && navigate("/");
		fetchUserData(user, setName, setUserPhoto);
		fetchContacts(user, setContacts);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);

	const logoutUser = () => {
		logout();
		navigate("/");
	};

	return (
		<>
			<GlobalStyle />
			<Container>
				<Sidebar width={400}>
					<ProfileHeader>
						<ProfileHeaderComp
							name={name}
							userPhoto={userPhoto}
							logoutUser={logoutUser}
						/>
					</ProfileHeader>
					<ContactSearch>
						<ContactSearchComp />
					</ContactSearch>
					<ContactList>
						<ContactListComp
							contacts={contacts}
							setActiveContact={setActiveContact}
						/>
					</ContactList>
				</Sidebar>

				{activeContact && (
					<Chat>
						<ChatHeader>
							<ChatHeaderComp activeContact={activeContact} />
						</ChatHeader>
						<Messages>
							<MessagesComp
								user_id={user?.uid as string}
								loading={loading}
								activeContact_id={activeContact?.uid as string}
								flagForChatFetch={flagForChatFetch}
								runFetchMessage={runFetchMessage}
								setFetchMessage={setFetchMessage}
							/>
						</Messages>
						<TypingSection>
							<TypingSectionComp
								user_id={user?.uid as string}
								loading={loading}
								activeContact_id={activeContact?.uid as string}
								flagForChatFetch={flagForChatFetch}
								setFlagForChatFetch={setFlagForChatFetch}
								setFetchMessage={setFetchMessage}
							/>
						</TypingSection>
					</Chat>
				)}
			</Container>
		</>
	);
};

export default App;

const Container = styled(Layout)`
	background: var(--container-background);
	padding: 1%;
	height: 100vh;
`;

const Sidebar = styled(Sider)`
	background: var(--app-color);
	box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.25);
	border-radius: 2px 0px 0px 2px;
	overflow: auto;
`;

const ProfileHeader = styled(Header)`
	background: var(--app-color);
	padding: 0px;
	margin: 0px;
`;

const ContactSearch = styled(Header)`
	background: none;
	margin: 10px 0;
	padding: 0px 20px;
	height: 40px;
`;

const ContactList = styled(Content)`
	margin: 0px;
`;

const Chat = styled(Layout)`
	// margin: 0px 0px 0px 20px;
	box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
	border-radius: 0px 2px 2px 0px;
`;

const ChatHeader = styled(Header)`
	background: var(--app-color);
	margin: 0px;
	padding: 0px;
`;

const Messages = styled(Content)`
	background: var(--message-background);
	margin: 0px;
	padding: 0px;
	overflow: auto;
	display: flex;
	flex-direction: column-reverse;
`;

const TypingSection = styled(Footer)`
	background: var(--app-color);
	margin: 0px;
	padding: 0px;
`;
