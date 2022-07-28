import { SetStateAction, Dispatch,  useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../config/auth";

import styled from "styled-components";
// import { fetchContactChat } from "../functions/fetchContactChat";
// import { fetchMessages } from "../functions/fetchMessages";
// import { fetchChat } from "../functions/fetchChat";

interface MessagesCompProps {
	user_id: string;
	loading: any;
	activeContact_id: string;
	flagForChatFetch: number;
	runFetchMessage: boolean;
	setFetchMessage: Dispatch<SetStateAction<boolean>>;
}

const MessagesComp: React.FC<MessagesCompProps> = ({
	user_id,
	loading,
	activeContact_id,
	flagForChatFetch,
	runFetchMessage,
	setFetchMessage,
}) => {
	// const navigate = useNavigate();

	const [chat, setChat] = useState<Array<Message>>([]);
    setChat([])
    // const messages: any[] = [];

	// useEffect(() => {
	// 	if (loading) return;
	// 	!user_id && navigate("/");

	// onSnapshot(
	// 	collection(
	// 		db,
	// 		"chats",
	// 		user_id,
	// 		"contacts",
	// 		activeContact_id,
	// 		"messages"
	// 	),
	// 	(querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			messages.push(doc.data());
	// 		});
	// 		setChat(messages);
	// 	}
	// );
	// console.log("first fetch for sender -- ", chat);
	// onSnapshot(
	// 	collection(
	// 		db,
	// 		"chats",
	// 		activeContact_id,
	// 		"contacts",
	// 		user_id,
	// 		"messages"
	// 	),
	// 	(querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			messages.push(doc.data());
	// 		});
	// 		setChat(messages);
	// 	}
	// );
	// console.log("second fetch for sender -- ", chat);
	// });

	// }, [activeContact_id, loading, navigate, user_id, stopListening]);

	// useEffect(() => {
	// 	if (loading) return;
	// 	!user_id && navigate("/");

	// 	runFetchMessage &&
	// 		onSnapshot(
	// 			collection(
	// 				db,
	// 				"chats",
	// 				activeContact_id,
	// 				"contacts",
	// 				user_id,
	// 				"messages"
	// 			),
	// 			(querySnapshot) => {
	// 				querySnapshot.forEach((doc) => {
	// 					messages.push(doc.data());
	// 				});
	// 				setChat(messages);
	// 			}
	// 		);
	// 	// 		fetchMessages(user_id, activeContact_id).then((result: any) => {
	// 	// 			setChat(result);
	// 	// 		});
	// 	setFetchMessage(false);
	// }, [runFetchMessage]);

	const Messages = chat
		.sort((a: any, b: any) => (a.timestamp > b.timestamp ? 1 : -1))
		.map((messageObj: any) => {
			if (messageObj.user_id === user_id) {
				return (
					<SentMsg key={messageObj.timestamp}>
						{messageObj.message}
					</SentMsg>
				);
			} else {
				return (
					<ReceivedMsg key={messageObj.timestamp}>
						{messageObj.message}
					</ReceivedMsg>
				);
			}
		});

	// console.log(Messages);

	return <div>{Messages}</div>;
};

export default MessagesComp;

const Messages = styled.p`
	width: fit-content;
	overflow-wrap: break-word;
	padding: 10px;
	border-radius: 7px;
`;

const ReceivedMsg = styled(Messages)`
	text-align: left;
	max-width: 400px;
	margin: 20px auto 20px 20px;
	background-color: var(--received-msg-bubble-color);
`;

const SentMsg = styled(Messages)`
	text-align: right;
	max-width: 400px;
	margin: 20px 20px 20px auto;
	background: var(--sent-msg-bubble-color);
`;
