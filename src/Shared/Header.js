import React from 'react';
import { Button, Dropdown, message, Space, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import './Header.scss';

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


function Header() {
    return (
        <div className='header'>
            <div className='upper'>
                <div className='left'>
                    <div>View Name</div>
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                North India Region
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>

                <div className='right'>
                    <div>John Doe</div>
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
                <div>DATA ENTRY</div>
                <div>TRACKER</div>
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
                <div>
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                Submit for Approval
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </div>

    )
}

export default Header