import React from 'react'
import './Dashboard.scss';
import { DownOutlined, UserOutlined, SignalFilled, AppstoreOutlined, FileOutlined, DatabaseOutlined, CopyOutlined, RiseOutlined, CheckCircleOutlined, AimOutlined, LogoutOutlined, BuildOutlined, BellOutlined, GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';

// const handleButtonClick = (e) => {
//     message.info('Click on left button.');
//     console.log('click left button', e);
// };
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};

function Dashboard() {
    return (
        <div className='bars'>

            <div className='dashboard'>
                <h4>BREATHE ESG</h4>
                <div>
                    <p><SignalFilled /> Dashboard</p>
                    <p><AppstoreOutlined /> Entity Manager</p>
                    <p><DatabaseOutlined /> Data Manager</p>
                    <p><FileOutlined /> Reporting</p>
                    <p><CopyOutlined /> Materiality</p>
                    <p><CheckCircleOutlined /> Suppliers</p>
                    <p><RiseOutlined /> Analytics</p>
                    <p><AimOutlined /> Targets</p>
                    <p><LogoutOutlined /> Logout</p>
                </div>
            </div>



            <div className='header'>
                <div className='upper'>
                    <div className='left'>
                        <div>View Name</div>
                        <Dropdown menu={menuProps}>
                            <Button>
                                <Space>
                                    <GlobalOutlined /> North India Region
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>

                    <div className='right'>
                        <div><BellOutlined /> John Doe</div>
                        <div>
                            <Space direction="vertical" size={16}>
                                <Space wrap size={16}>
                                    <Avatar size="small" icon={<UserOutlined />} />
                                </Space>
                            </Space>
                        </div>
                    </div>
                </div>

                <div className='lower'>
                    <div className='left'>
                        <Link to='/dataentry' className='nav-link'><BuildOutlined /> DATA ENTRY</Link>
                        <Link to='/tracker' className='nav-link'><AimOutlined /> TRACKER</Link>
                    </div>

                    <div className='right'>
                        <div>
                            For:
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        FY 2023-2024
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                        <Dropdown menu={menuProps}>
                            <Button className='submit'>
                                <Space>
                                    Submit for Approval
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard