import React from 'react'
import './Signup.scss'
import Banner from '../Shared/Banner';

import { Button, Form, Input, InputNumber } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import earth from '../Images/Earth.png';

function Signup() {
    return (
        <div className='Signup'>
            <Banner />

            <div className='form-container'>
                <img src={earth} alt="Earth" className='earth' />
                <Form className='form'>
                    <div className='formcontent'>
                        <h1>Sign Up</h1>
                        <p>Please sign up using email ID</p>

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

                        <Form.Item
                            name="password"
                            label="Confirm Password"
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
                        <Button className="button" block size='large'>Continue</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signup