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
