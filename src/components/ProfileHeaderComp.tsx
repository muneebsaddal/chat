import styled from "styled-components";
import { MoreOutlined } from "@ant-design/icons";

import img from "../assets/default-user-icon.png";

interface ProfileHeaderProps {
	name: string;
	userPhoto: string;
}

const ProfileHeaderComp: React.FC<ProfileHeaderProps> = (props) => {
	return (
		<ProfileHeader>
			<span>
				<img src={props.userPhoto ? props.userPhoto : img} alt="" />
				<h3>{props.name ? props.name : "User"}</h3>
			</span>
			<span>
				<MoreOutlined
					style={{
						fontSize: "24px",
						color: "#000000",
					}}
				/>
			</span>
		</ProfileHeader>
	);
};

export default ProfileHeaderComp;

const ProfileHeader = styled.div`
    height: 64px;
	padding: 0px 25px;
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
        
        > h3 {
            font-weight: 600;
            font-size: 16px;
            color: #011627;
        }
    }
`;
