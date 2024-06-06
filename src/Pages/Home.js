import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Images/logo.png';

import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <h1 className='breathe'>
                <img src={Logo} alt="LOGO" className='Logo' />
                <span className='breathe-text'>BREATHE ESG</span>
            </h1>
            <div className='container'>
                <h1><Link to="/signup"><button className="btn">Sign Up page</button></Link></h1>
                <h1><Link to="/login"><button className="btn">Login page</button></Link></h1>
                <h1><Link to="/dataentry"><button className="btn">Data Entry</button></Link></h1>
                <h1><Link to="/tracker"><button className="btn">Tracker</button></Link></h1>
            </div>
        </div>
    );
}

export default Home;
