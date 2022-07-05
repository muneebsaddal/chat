import styled from "styled-components";
import {
	// SmileOutlined,
	SendOutlined,
} from "@ant-design/icons";
import { User } from "firebase/auth";
import { Input, Form, Button } from "antd";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
// import postMessage from "../functions/postMessage";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

interface TypingSectionCompProps {
	setMessage: Dispatch<SetStateAction<string>>;
	user: User | null | undefined;
	loading: any;
}

const TypingSectionComp: React.FC<TypingSectionCompProps> = (props) => {
	const [message, setMessages] = useState("");
	const navigate = useNavigate();

	const onFinish = (e: any) => {
		console.log(message);
		props.setMessage(message);
	};

	useEffect(() => {
		if (props.loading) return;
		!props.user && navigate("/");

		// postMessage(message, props.user);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.user, props.loading]);

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
				onChange={(e) => setMessages(e.target.value)}
				placeholder="Message"
				autoSize={{ minRows: 1, maxRows: 2 }}
			/>
			<SendButton htmlType="submit">
				<SendOutlined
					style={{
						fontSize: "22px",
						color: "#707991",
					}}
				/>
			</SendButton>
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
