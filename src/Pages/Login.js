import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase/firebaseConfig';

import Banner from '../Shared/Banner';
import earth from '../Images/Earth.png';

import './Login.scss';

function Login() {
    const navigate = useNavigate();

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/dataentry');  // Redirect to /dataentry on successful login
        } catch (error) {
            console.error("Error during Google login:", error);
        }
    };
    return (
        <div className='Login'>
            <Banner />

            <div className='form-container'>
                <img src={earth} alt="Earth" className='earth' />
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
                            labelCol={{ span: 24 }}
                        >
                            <Input placeholder='Your Email ID' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            labelCol={{ span: 24 }}
                        >
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <di className="auth">
                            <Button className="ggl-button" onClick={handleGoogle} block size='medium'><GoogleOutlined /> Sign up with Google</Button>
                            {/* <Button className="ggl-button" block size='medium'><TwitterOutlined /> Sign up with Twitter</Button> */}
                        </di>
                        <p className='trouble'>Having trouble logging in? <Link to='/' className='link'>Contact Us</Link></p>
                        <Button className="button" block size='large'>Continue</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login