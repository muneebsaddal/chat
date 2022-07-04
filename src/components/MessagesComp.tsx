import { useEffect } from "react";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { fetchContactChat } from "../functions/fetchContactChat";

interface MessagesCompProps {
	user: User | null | undefined;
	loading: any;
	activeContact: Contact | undefined;
	message: string;
}

const MessagesComp: React.FC<MessagesCompProps> = (props) => {
	const navigate = useNavigate();
	const currentUserId = props.user?.uid;
	const currentContactId = props.activeContact?.uid;

	useEffect(() => {
		if (props.loading) return;
		!props.user && navigate("/");

		fetchContactChat(currentUserId, currentContactId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.user, props.loading]);

	return (
		<div>
			<ReceivedMsg>Received msg</ReceivedMsg>
			<SentMsg>{props.message}</SentMsg>
		</div>
	);
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
