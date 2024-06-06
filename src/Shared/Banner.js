import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.scss';

import logo from '../Images/logo.png';

function Banner() {
    return (
        <div className='banner'>
            <p>
                <p>WELCOME TO </p>
                <h1 className='breathe'>
                    <img src={logo} alt="LOGO" className='logo' />
                    <span className='breathe-text'>BREATHE ESG</span>
                </h1>
                {/* <img src={logo} alt="LOGO" className='logo' /> BREATHE ESG</h1> */}
                <p>We help you to track your organisations <br />metrices as per the ESG Guidelines.</p>
                <p>Sounds Interesting? <Link to='/' className='link'>Get in touch!</Link></p>
            </p>
        </div>
    )
}

export default Banner