import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

import defaultUserImg from "../assets/default-user-icon.png";

interface ContactListProps {
	contacts: Array<Contact>;
	setActiveContact: Dispatch<SetStateAction<Contact | undefined>>;
}

const ContactListComp: React.FC<ContactListProps> = ({
	contacts,
	setActiveContact,
}) => {
	const contactList = contacts.map((contact) => {
		const handleActiveContact = () => {
			setActiveContact(contact);
		};
		return (
			<ContactComp key={contact.uid} onClick={handleActiveContact}>
				<img
					src={contact.photoUrl ? contact.photoUrl : defaultUserImg}
					alt=""
					width="40px"
					height="40px"
				/>
				<section>
					<div>
						<h3>{contact.name}</h3>
						<h4>Ok, see you later</h4>
					</div>
					<div className="new-message-count">
						<h5>19:48</h5>
						<div>1</div>
					</div>
				</section>
			</ContactComp>
		);
	});

	return <>{contactList}</>;
};

export default ContactListComp;

const ContactComp = styled.div`
	width: 100%;
	height: 70px;
	padding: 0px 10px;

	display: flex;
	align-items: center;
	justify-content: left;

	cursor: pointer;
	border-bottom: 1px solid #ddd;

	> section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		> div {
			padding-left: 10px;
			align-items: right;
			> div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				width: 18px;
				height: 18px;
				background: #78e378;
				text-align: center;
			}
		}
	}
	.new-message-count {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
`;
