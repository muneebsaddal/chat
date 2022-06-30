import styled from "styled-components";
import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

import img from "../assets/default-user-icon.png";

interface ProfileHeaderProps {
	name: string;
	userPhoto: string;
	logoutUser: () => void;
}

const ProfileHeaderComp: React.FC<ProfileHeaderProps> = (props) => {
	const menu = (
		<Menu
			items={[
				{
					key: "0",
					label: (
						<DropdownItems
							style={{ border: "none" }}
							onClick={props.logoutUser}
						>
							<p>Logout</p>
						</DropdownItems>
					),
				},
			]}
		/>
	);

	return (
		<ProfileHeader>
			<span>
				<img src={props.userPhoto ? props.userPhoto : img} alt="" />
				<h3>{props.name ? props.name : "User"}</h3>
			</span>
			<span>
				<Dropdown
					overlay={menu}
					placement="bottom"
					trigger={["click"]}
					arrow
				>
					<MoreOutlined
						style={{
							fontSize: "24px",
							color: "#000000",
						}}
					/>
				</Dropdown>
			</span>
		</ProfileHeader>
	);
};

export default ProfileHeaderComp;

const ProfileHeader = styled.div`
    height: 64px;
	padding: 0px 20px;
    margin: 5px 0;
	display: flex;
	flex-direction: horizontal;
	justify-content: space-between;
	align-items: center;
    > span {
        display: flex;
        gap: 20px;
        align-items: center;
        > img {
            width: 40px;
            height 40px;
        }
    }
`;

const DropdownItems = styled.div`
	padding: 3px 7px;
`;
