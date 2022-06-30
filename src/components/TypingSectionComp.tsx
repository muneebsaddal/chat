import { useState } from "react";
import styled from "styled-components";
import { SmileOutlined, SendOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { TextArea } = Input;

const TypingSectionComp: React.FC = () => {
	const [value, setValue] = useState("");

	return (
		<TypingSection>
			<SmileOutlined
				style={{
					fontSize: "22px",
					color: "#707991",
				}}
			/>
			<TextArea
				value={value}
				size="large"
				onChange={(e) => setValue(e.target.value)}
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
        background: var(--typing-section-background)
	}
`;
