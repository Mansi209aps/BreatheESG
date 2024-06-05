import React from 'react'
import './Login.scss';
import Banner from '../Shared/Banner';

import { Button, Form, Input, InputNumber } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem';

function Login() {
    return (
        <div className='Login'>
            <Banner />
            <Form className='form'>
                <div className='formcontent'>
                    <h1>Login</h1>
                    <p>Enter your registered Email ID to continue</p>

                    <Form.Item className='form-item'
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                        labelCol={{ span: 24 }} // Set label to span across all columns
                    >
                        <Input placeholder='Your Email ID' />
                    </Form.Item>
                    {/* <Input size="large" placeholder="Your Email ID" /> */}

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        labelCol={{ span: 24 }} // Set label to span across all columns
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <p className='trouble'>Having trouble logging in? <u><a href='/'>Contact Us</a></u></p>
                    <Button className="button" block size='large'>Continue</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login