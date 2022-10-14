import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <span class="footer__span">
            Desenvolvido com
            <FaHeart className='footer__icon'/>
            por <a href='https://www.linkedin.com/in/beatriznonato/' target='blank' className='footer__a'>Beatriz Nonato</a>
            </span>
        </footer>
    )
}

export default Footer;
