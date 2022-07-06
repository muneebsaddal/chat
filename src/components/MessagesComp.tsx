import { useEffect } from "react";
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

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");

		fetchContactChat(user_id, activeContact_id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user_id, loading]);

	return (
		<div>
			<ReceivedMsg>Received msg</ReceivedMsg>
			<SentMsg>sent msg</SentMsg>
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
