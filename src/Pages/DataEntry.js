import React, { useState } from 'react';
import './Dataentry.scss';
import Dashboard from '../Shared/Dashboard';
import Header from '../Shared/Header';
import { Divider, Radio, Table, Space, Tag, Result } from 'antd';
import { ShareAltOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'ASSESSMENT TITLE',
        dataIndex: 'assessment',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'TYPE',
        dataIndex: 'type',
    },
    {
        title: 'NO. OF SUPPLIERS',
        dataIndex: 'suppliers',
    },
    {
        title: 'SCORE',
        dataIndex: 'score',
    },
    {
        title: 'RISK CLASSIFICATION',
        dataIndex: 'risk',
    },
    {
        title: 'STATUS',
        key: 'tags',
        dataIndex: 'status',
        render: (_, { status }) => (
            <>
                {status.map((status) => {
                    let color = status.length == 7 ? 'red' : 'green';

                    return (
                        <Tag color={color} key={status}>
                            {status.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'RESULT',
        dataIndex: 'result',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];
const data = [
    {
        key: '1',
        assessment: 'Assessment 1',
        type: 'BRSR',
        suppliers: 20,
        score: '-',
        risk: 'Medium',
        status: ['Pending'],
        result: '-',
        actions:
            <div>
                <ShareAltOutlined style={{ marginRight: '12px' }} />
                <DeleteOutlined />
            </div>
    },
    {
        key: '2',
        assessment: 'Assessment 2',
        type: 'BRSR',
        suppliers: 25,
        score: 98,
        risk: 'Low',
        status: ['Complete'],
        result: 'View',
        actions:
            <div>
                <ShareAltOutlined style={{ marginRight: '12px' }} />
                <DeleteOutlined />
            </div>,
    },
    {
        key: '3',
        assessment: 'Assessment 3',
        type: 'BRSR',
        suppliers: 35,
        score: 22,
        risk: 'High',
        status: ['Complete'],
        result: 'View',
        actions:
            <div>
                <ShareAltOutlined style={{ marginRight: '12px' }} />
                <DeleteOutlined />
            </div>,
    },
    {
        key: '4',
        assessment: 'Assessment 3',
        type: 'Custom',
        suppliers: 49,
        score: 23,
        risk: 'Medium',
        status: ['Complete'],
        result: 'View',
        actions:
            <div>
                <ShareAltOutlined style={{ marginRight: '12px' }} />
                <DeleteOutlined />
            </div>,
    },
    {
        key: '4',
        assessment: 'Assessment 4',
        type: 'Custom',
        suppliers: 100,
        score: 42,
        risk: 'Medium',
        status: ['Complete'],
        result: 'View',
        actions:
            <div>
                <ShareAltOutlined style={{ marginRight: '12px' }} />
                <DeleteOutlined />
            </div>,
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

function DataEntry() {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div className='dataentry'>
            <Dashboard />
            <div>

                <div className='table'>
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default DataEntry