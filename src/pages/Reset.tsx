import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, passwordResetEmail } from "../config/firebase";

const Reset = () => {
	const [email, setEmail] = useState<string>("");

	const [resetResponse, showResetResponse] = useState<boolean>(false);

	const [
		user,
		loading,
		// error
	] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) return;
		user && navigate("/home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);

	const onFinish = async () => {
		const res = await passwordResetEmail(email);
		res && showResetResponse(true);
	};

	const navigateToLogin = () => {
		navigate("/");
	};

	return (
		<Container>
			{!resetResponse ? (
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
							onChange={(e) => setEmail(e.target.value)}
						/>
					</StyledForm.Item>
					<StyledForm.Item>
						<ResetButton
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Reset Password
						</ResetButton>
					</StyledForm.Item>
				</StyledForm>
			) : (
				<StyledForm
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<ResponseMessage>Reset Email Sent!</ResponseMessage>
					<StyledForm.Item>
						<LoginButton
							type="primary"
							className="login-form-button"
							onClick={navigateToLogin}
						>
							Login
						</LoginButton>
					</StyledForm.Item>
				</StyledForm>
			)}
		</Container>
	);
};

export default Reset;

const Container = styled.div`
	font-family: "Nunito", sans-serif;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled(Form)`
	background: var(--container-background);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	max-width: 400px;
	width: 350px;
	height: 250px;
	padding: 10px 40px 0px 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ResetButton = styled(Button)`
	width: 100%;
`;

const LoginButton = styled(Button)`
	width: 100px;
`;

const ResponseMessage = styled.p`
	margin-bottom: 20px;
`;
