import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	loginWithEmailAndPassword,
	signInWithGoogle,
} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// import Logo from "../assets/keyIllustration.png";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [
		user,
		loading,
		// error
	] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			//trigger a loading screen here
			return;
		}
		if (user) navigate("/home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);

	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
		setEmail(values.email);
		setPassword(values.password);
		loginWithEmailAndPassword(email, password);
	};

	return (
		<Container>
			<LoginSection>
				<StyledForm
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<StyledForm.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Email"
						/>
					</StyledForm.Item>
					<StyledForm.Item
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
					</StyledForm.Item>
					<StyledForm.Item>
						<StyledForm.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
							<Checkbox>Remember me</Checkbox>
						</StyledForm.Item>

						<ForgotPassword className="login-form-forgot">
							<Link to="/reset">Forgot password</Link>
						</ForgotPassword>
					</StyledForm.Item>

					<StyledForm.Item>
						<LoginButton
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</LoginButton>
						<GoogleSignInButton
							type="primary"
							// htmlType="submit"
							className="login-form-button"
							onClick={signInWithGoogle}
						>
							Sign in with Google
						</GoogleSignInButton>
						Or <Link to="/register">register now!</Link>
					</StyledForm.Item>
				</StyledForm>
				{/* <img src={Logo} alt="" /> */}
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
	padding: 50px 50px 30px 50px;
	justify-content: space-between;

	// position: relative;
	// width: 636px;
	// height: 410px;

	background: #fdfdfd;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;

const StyledForm = styled(Form)`
	max-width: 400px;
	width: 350px;
	height: 300px;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
`;

const ForgotPassword = styled.span`
	float: right;
`;

const LoginButton = styled(Button)`
	width: 100%;
	margin-bottom: 10px;
`;

const GoogleSignInButton = styled(Button)`
	width: 100%;
	margin-bottom: 10px;
`;
