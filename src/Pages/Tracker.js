import React from 'react';
import { Table, Tag } from 'antd';
import { ArrowDownOutlined, PercentageOutlined, FilterFilled, PieChartOutlined, SolutionOutlined } from '@ant-design/icons';

import Dashboard from '../Shared/Dashboard';

import './Tracker.scss';

const columns = [
    {
        title: <>MONTH < ArrowDownOutlined /></>,
        dataIndex: 'month',
    },
    {
        title: <>STATUS < ArrowDownOutlined /></>,
        key: 'tags',
        dataIndex: 'status',
        render: (_, { status }) => {
            let color;
            let statusText;
            switch (status[0]) {
                case 'PENDING APPROVAL (1/2)':
                    color = 'red';
                    statusText = 'PENDING APPROVAL (1/2)';
                    break;
                case 'APPROVED':
                    color = 'green';
                    statusText = 'APPROVED';
                    break;
                case 'INCOMPLETE':
                    color = 'orange';
                    statusText = 'INCOMPLETE';
                    break;
                default:
                    color = 'blue';
                    statusText = '';
            }
            return (
                <Tag color={color} key={statusText}>
                    {statusText.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: <div style={{ display: 'flex', alignItems: 'center' }}>
            COMPLETION
            <div style={{ marginLeft: '8px' }}>
                <PercentageOutlined />
            </div>
            <div style={{ marginLeft: '8px' }}>
                <ArrowDownOutlined />
            </div>
        </div>,
        dataIndex: 'completion',
    },
    {
        title: <>BUSINESS UNIT <FilterFilled /></>,
        dataIndex: 'unit',
    },
];

const data = [
    {
        key: '1',
        month: 'Jan 2023',
        status: ['PENDING APPROVAL (1/2)'],
        completion: 20,
        unit: 'Business Unit 1',
    },
    {
        key: '2',
        month: 'Feb 2023',
        status: ['APPROVED'],
        completion: 30,
        unit: 'Business Unit 1',
    },
    {
        key: '3',
        month: 'March 2023',
        status: ['INCOMPLETE'],
        completion: 50,
        unit: 'Business Unit 1',
    },
];

function Tracker() {
    return (
        <div className='tracker'>
            <Dashboard />
            <div className='head'>
                <div>
                    <p>PENDING TRACKERS <PieChartOutlined /></p>
                    <h2>45/60</h2>
                </div>
                <div>
                    <p>PENDING REVIEWS <SolutionOutlined /></p>
                    <h2>3</h2>
                </div>
            </div>
            <div className='table'>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    );
}

export default Tracker;
