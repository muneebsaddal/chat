import { useEffect, useState, useRef } from "react";
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
	const divRef = useRef<null | HTMLDivElement>(null);

	const [chat, setChat] = useState<[]>([]);

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");

		fetchContactChat(user_id, activeContact_id, setChat);

		divRef!.current!.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		user_id,
		activeContact_id,
		// chat
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

	return (
		<Container>
			{Messages}
			<div ref={divRef} />
		</Container>
	);
};

export default MessagesComp;

const Container = styled.div``;

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
