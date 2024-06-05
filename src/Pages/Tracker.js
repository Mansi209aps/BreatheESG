import React from 'react'
import './Tracker.scss';
import Dashboard from '../Shared/Dashboard'
import Header from '../Shared/Header'


function Tracker() {
    return (
        <div className='tracker'>
            <Dashboard />
            <Header />
        </div>
    )
}

export default Tracker