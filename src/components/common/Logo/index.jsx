import React from 'react';
import logo from './logo.png'
import './styles.css'
import {useNavigate} from 'react-router-dom'

const Logo = () => {
    
    const navigate = useNavigate()
    return (
        <div className='header-content_logo'>
            <div onClick={() => navigate('/')}>
                <img src={logo} alt='logo' />
                <span>
                    <b>Taste</b>
                </span>
            </div>
            <p>
                <b>Restaurant & BBQ</b>
            </p>
        </div>
    )
};

export default Logo;
