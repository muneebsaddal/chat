import { SetStateAction, Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { fetchContactChat } from "../functions/fetchContactChat";
import { fetchMessages } from "../functions/fetchMessages";

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
	const navigate = useNavigate();

	const [chat, setChat] = useState<Array<Message>>([]);

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");

		fetchContactChat(user_id, activeContact_id).then((result: any) => {
			setChat(result);
		});
	}, [activeContact_id, loading, navigate, user_id]);

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");

		runFetchMessage &&
			fetchContactChat(user_id, activeContact_id).then((result: any) => {
				setChat(result);
			});
		setFetchMessage(false);
	}, [
		activeContact_id,
		loading,
		navigate,
		runFetchMessage,
		setFetchMessage,
		user_id,
	]);

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

	console.log(Messages);

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
