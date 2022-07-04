import { useState } from "react";
import styled from "styled-components";
import { SmileOutlined, SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Dispatch, SetStateAction } from "react";

const { TextArea } = Input;

interface TypingSectionCompProps {
	setMessage: Dispatch<SetStateAction<string>>;
}

const TypingSectionComp: React.FC<TypingSectionCompProps> = (props) => {
	const handleSetMessage = (e: string) => {
		props.setMessage(e);
	};
	return (
		<TypingSection>
			<SmileOutlined
				style={{
					fontSize: "22px",
					color: "#707991",
				}}
			/>
			<TextArea
				// value={value}
				size="large"
				onChange={(e) => handleSetMessage(e.target.value)}
				placeholder="Message"
				autoSize={{ minRows: 1, maxRows: 2 }}
			/>
			<SendOutlined
				style={{
					fontSize: "22px",
					color: "#707991",
				}}
			/>
		</TypingSection>
	);
};

export default TypingSectionComp;

const TypingSection = styled.div`
	height: 64px;
	padding: 0px 25px;
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
