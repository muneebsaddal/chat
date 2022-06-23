import styled from "styled-components";
import { MoreOutlined } from "@ant-design/icons";

import ProfileAvatar from "../assets/Xiao.webp";

// interface ProfileHeaderProps {
// 	name: string;
// }

// const ProfileHeaderComp: React.FC<ProfileHeaderProps> = (props) => {
// 	console.log(props.name);

const ProfileHeaderComp: React.FC = () => {
	return (
		<ProfileHeader>
			<span>
				<img src={ProfileAvatar} alt="" />
				<h3>{/* {props.name} */}</h3>
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
