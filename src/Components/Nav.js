import React from 'react';

const Nav = ({ changeSection }) => {
    return (
        <nav>
            <ul>
                <li><a href="#home" onClick={() => changeSection('home')}>Home</a></li>
                <li><a href="#doctors" onClick={() => changeSection('doctors')}>Doctors</a></li>
                <li><a href="#hospitals" onClick={() => changeSection('hospitals')}>Hospitals</a></li>
                <li><a href="#healthfeed" onClick={() => changeSection('healthfeed')}>Healthfeed</a></li>
                <li><a href="#contact" onClick={() => changeSection('contact')}>Contact</a></li>
                <li><a href="#login" onClick={() => changeSection('login')}>Login</a></li>
                <li><a href="#signup" onClick={() => changeSection('signup')}>Signup</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
