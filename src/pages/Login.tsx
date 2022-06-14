import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

import Logo from "../assets/loginLogo.png";

const Login: React.FC = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Container>
			<LoginSection>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
				<img src={Logo} alt="" />
			</LoginSection>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	font-family: "Maven Pro";
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginSection = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px 70px;
	justify-content: space-between;

	position: relative;
	width: 636px;
	height: 410px;

	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
