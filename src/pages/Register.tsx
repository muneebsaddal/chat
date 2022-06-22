import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "../config/firebase";

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 0,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 24,
		},
	},
};

const Register = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [form] = Form.useForm();

	const [
		user,
		loading,
		// error
	] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);

	const onFinish = () => {
		registerWithEmailAndPassword(name, email, password);
	};

	return (
		<Container>
			<RegisterForm>
				<Form
					{...formItemLayout}
					form={form}
					name="register"
					onFinish={onFinish}
					scrollToFirstError
				>
					<FormItem
						name="name"
						label="Name"
						tooltip="What do you want others to call you?"
						rules={[
							{
								required: true,
								message: "Please input your full name!",
								whitespace: true,
							},
						]}
					>
						<Input
							id="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</FormItem>

					<FormItem
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: "Please input your Email!",
							},
						]}
					>
						<Input
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormItem>

					<FormItem
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
						hasFeedback
					>
						<Input.Password
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormItem>

					<FormItem
						name="confirm"
						label="Confirm Password"
						dependencies={["password"]}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please confirm your password!",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue("password") === value
									) {
										return Promise.resolve();
									}

									return Promise.reject(
										new Error(
											"The two passwords that you entered do not match!"
										)
									);
								},
							}),
						]}
					>
						<Input.Password id="confirm-password" />
					</FormItem>

					<FormItem>
						<RegisterButton
							id="register-button"
							type="primary"
							htmlType="submit"
						>
							Register
						</RegisterButton>
						<GoogleSignInButton
							type="primary"
							className="login-form-button"
							onClick={signInWithGoogle}
						>
							Sign in with Google
						</GoogleSignInButton>
						Or <Link to="/">Login!</Link>
					</FormItem>
				</Form>
			</RegisterForm>
		</Container>
	);
};

export default Register;

const Container = styled.div`
	font-family: "Maven Pro";
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RegisterForm = styled.section`
	padding: 50px;
	background: #fdfdfd;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	width: 480px;
`;

const FormItem = styled(Form.Item)`
	.ant-form-item-label {
		text-align: left;
	}
	font-size: 15px;
`;

const RegisterButton = styled(Button)`
	width: 100%;
	margin-bottom: 10px;
`;

const GoogleSignInButton = styled(Button)`
	width: 100%;
	margin-bottom: 10px;
`;
