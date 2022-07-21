import styled from "styled-components";
import {
	// SmileOutlined,
	SendOutlined,
} from "@ant-design/icons";
import { Input, Form, Button } from "antd";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import postMessage from "../functions/postMessage";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

interface TypingSectionCompProps {
	user_id: string;
	loading: any;
	activeContact_id: string;
	flagForChatFetch: number;
	setFlagForChatFetch: Dispatch<SetStateAction<number>>;
	setFetchMessage: Dispatch<SetStateAction<boolean>>;
}

const TypingSectionComp: React.FC<TypingSectionCompProps> = ({
	user_id,
	loading,
	activeContact_id,
	flagForChatFetch,
	setFlagForChatFetch,
	setFetchMessage,
}) => {
	const navigate = useNavigate();

	const [message, setMessage] = useState<string>("");
	const [temp, setTemp] = useState<string>("");

	const onFinish = () => {
		setMessage(temp);
		setTemp("");
	};

	useEffect(() => {
		if (loading) return;
		!user_id && navigate("/");
		// setFetchMessage(false);
		message && postMessage(message, user_id, activeContact_id);
		setMessage("");
		setFlagForChatFetch(flagForChatFetch++);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user_id, loading, message, activeContact_id]);

	return (
		<TypingSection onFinish={onFinish}>
			{/* <SmileOutlined
				style={{
					fontSize: "22px",
					color: "#707991",
				}}
			/> */}

			<TextArea
				size="large"
				onChange={(e) => setTemp(e.target.value)}
				placeholder="Message"
				value={temp}
				autoSize={{ minRows: 1, maxRows: 2 }}
			/>
			<button onClick={() => setFetchMessage(true)}>
				<SendButton htmlType="submit">
					<SendOutlined
						style={{
							fontSize: "22px",
							color: "#707991",
						}}
					/>
				</SendButton>
			</button>
		</TypingSection>
	);
};

export default TypingSectionComp;

const TypingSection = styled(Form)`
	height: 64px;
	padding: 0 25px 0 0;
	display: flex;
	flex-direction: horizontal;
	justify-content: space-between;
	align-items: center;
	> TextArea {
		margin: 0px 20px;
		border: none;
		background: var(--typing-section-background);
	}
`;

const SendButton = styled(Button)`
	border: none;
	padding: 0;
	margin: 0;
	box-shadow: none;
`;
