import React from 'react';
import logo from '../../assets/images/logo.png'
import '../Header/Header.css'


const Header = () => {
    return (
        <header>
            <img className='header__logo' alt='logo Caju' src={logo}/>
        </header>
    )
}

export default Header;