import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const PublicLoginPage = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.username == "juniors" && values.password == "123456") {
      navigate("/dashboard");
    }
  };

  return (
    <Fragment>
      <section>
        <h1 className="login__title">Login</h1>
        <Flex className="form__box" align="center" justify="center">
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </section>
    </Fragment>
  );
};

export default PublicLoginPage;
