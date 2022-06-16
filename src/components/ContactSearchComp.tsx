import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const ContactSearchComp: React.FC = () => {
	const onSearch = (value: string) => console.log(value);
	return (
		<ContactSearch
			placeholder="Search"
			allowClear
			onSearch={onSearch}
			size="large"
		/>
	);
};

export default ContactSearchComp;

const ContactSearch = styled(Search)`
	.ant-input-affix-wrapper-lg {
		background: #fbfbfb;
		border: 1px solid #efefef;
	}
	.ant-input-search-button {
		background: #fbfbfb;
		border: 1px solid #efefef;
	}
	.ant-input {
		color: #707991;
		background: #fbfbfb;
	}
`;
