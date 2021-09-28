/*
 * @Author: your name
 * @Date: 2021-09-13 14:16:42
 * @LastEditTime: 2021-09-16 14:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\user\login\index.tsx
 */
import React, { FC } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { loginSystem } from '@/services/user/user';
import styles from './index.less';

type LoginPageProps = {};
const LoginPage: FC<LoginPageProps> = (props) => {
  const onFinish = (values: any) => {
    loginSystem(values).then((res: any) => {
      debugger;
    });
    console.log('Success:', values, loginSystem);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.loginDiv}>
      <div className={styles.formDiv}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember_me"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
