import React, {useContext} from 'react';
import {  Form, Input, Button, Checkbox  } from "antd";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Header from "../components/header"

import {Context} from '../../services/authContext';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

export default function Login(){
    // const {handleLogin} = useContext(Context);
   
    function handleLogin(){
      const {data: {token}} = {data: "123456"};
      localStorage.setItem('token', JSON.stringify(token));
      setAuthenticated(true);
      router.push('/users');
    }

        const onFinish = () => {
          console.log('Success:');
          handleLogin();
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };

    return (
      <>
      <Header selected={'2'}/>
        <div className={styles.container}>
            {/* <button type="button" onClick={() => handleLogin}>Entrar</button> */}
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
        </>
    )
}