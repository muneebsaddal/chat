import styled from "styled-components";
import { MoreOutlined, PhoneFilled, SearchOutlined } from "@ant-design/icons";

import img from "../assets/default-user-icon.png";

interface ChatHeaderProps {
	activeContact: Contact | undefined;
}

const ChatHeaderComp: React.FC<ChatHeaderProps> = ({ activeContact }) => {
	return (
		<ChatHeader>
			<div>
				<div className="chat-img-name">
					<img
						src={
							activeContact?.photoUrl
								? activeContact?.photoUrl
								: img
						}
						alt=""
						width={40}
						height={40}
					/>
					<div className="name-status">
						<h3>{activeContact?.name}</h3>
						<h4>last seen 5 min ago</h4>
					</div>
				</div>
			</div>
			<div className="chat-header-icons">
				<SearchOutlined
					style={{
						fontSize: "20px",
						color: "#707991",
					}}
				/>
				<PhoneFilled
					style={{
						fontSize: "20px",
						color: "#707991",
					}}
				/>
				<MoreOutlined
					style={{
						fontSize: "22px",
						color: "#707991",
					}}
				/>
			</div>
		</ChatHeader>
	);
};

export default ChatHeaderComp;

const ChatHeader = styled.div`
	height: 64px;
	padding: 0px 25px;
	display: flex;
	flex-direction: horizontal;
	justify-content: space-between;
	align-items: center;
	.chat-img-name {
		display: flex;
		flex-direction: horizontal;
		align-items: center;
		line-height: 24px;
	}
	.name-status {
		display: flex;
		flex-direction: column;
		padding-left: 15px;
	}
	.chat-header-icons {
		display: flex;
		gap: 20px;
	}
`;
