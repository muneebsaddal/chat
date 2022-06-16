import styled from "styled-components";

import ContactAvatar1 from "../assets/Jean.webp";

const ContactListComp: React.FC = () => {
	return (
		<>
			<ContactSearch>
				<img src={ContactAvatar1} alt="" width="40px" height="40px" />
				<section>
					<div>
						<h3>Jean</h3>
						<h4>Ok, see you later</h4>
					</div>
					<div className="new-message-count">
						<h5>19:48</h5>
						<div>1</div>
					</div>
				</section>
			</ContactSearch>
			<ContactSearch>
				<img src={ContactAvatar1} alt="" width="40px" height="40px" />
				<section>
					<div>
						<h3>Jean</h3>
						<h4>Ok, see you later</h4>
					</div>
					<div className="new-message-count">
						<h5>19:48</h5>
						<div>1</div>
					</div>
				</section>
			</ContactSearch>
		</>
	);
};

export default ContactListComp;

const ContactSearch = styled.div`
	width: 100%;
	height: 70px;
	padding: 0px 10px;

	display: flex;
	align-items: center;
	justify-content: left;

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
				font-size: 14px;
				font-weight: 500;
			}
		}
	}
	.new-message-count {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
`;
