import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { fetchContactChat } from "../functions/fetchContactChat";

interface MessagesCompProps {
	user_id: string;
	loading: any;
	activeContact_id: string;
}

const MessagesComp: React.FC<MessagesCompProps> = ({
	user_id,
	loading,
	activeContact_id,
}) => {
	const navigate = useNavigate();

	const [chat, setChat] = useState<[]>([]);

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");

		fetchContactChat(user_id, activeContact_id, setChat);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user_id, loading, activeContact_id]);

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

	return <div>{Messages}</div>;
};

export default MessagesComp;

const Messages = styled.p`
	width: fit-content;
	padding: 5px;
	border-radius: 7px;
`;

const ReceivedMsg = styled(Messages)`
	text-align: left;
	margin: 20px auto 20px 20px;
	background-color: var(--received-msg-bubble-color);
`;

const SentMsg = styled(Messages)`
	text-align: right;
	margin: 20px 20px 20px auto;
	background: var(--sent-msg-bubble-color);
`;
