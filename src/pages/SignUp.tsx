import { Button, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Option } = Select;

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

const SignUp = () => {
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 70,
				}}
			>
				<Option value="92">+92</Option>
			</Select>
		</Form.Item>
	);

	return (
		<Container>
			<Register>
				<Form
					{...formItemLayout}
					form={form}
					name="register"
					onFinish={onFinish}
					initialValues={{
						prefix: "92",
					}}
					scrollToFirstError
				>
					<FormItem
						name="Name"
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
						<Input />
					</FormItem>

					<FormItem
						name="phone"
						label="Phone Number"
						rules={[
							{
								required: true,
								message: "Please input your phone number!",
							},
						]}
					>
						<Input
							addonBefore={prefixSelector}
							style={{
								width: "100%",
							}}
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
						<Input.Password />
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
						<Input.Password />
					</FormItem>

					<FormItem>
						<RegisterButton type="primary" htmlType="submit">
							Register
						</RegisterButton>
						Or <Link to="/login">Login!</Link>
					</FormItem>
				</Form>
			</Register>
		</Container>
	);
};

export default SignUp;

const Container = styled.div`
	font-family: "Maven Pro";
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Register = styled.section`
	padding: 50px;
	background: #fdfdfd;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;

const FormItem = styled(Form.Item)`
	.ant-form-item-label {
		text-align: left;
	}
	font-size: 15px;
`;

const RegisterButton = styled(Button)`
	width: 100%;
	margin: 10px 0px;
`;
