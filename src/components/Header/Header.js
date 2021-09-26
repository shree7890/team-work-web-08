import React from 'react';
import './Header.css';
import logo from '../../images/exertio-logo.png';
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav>
                        <ul className="menu">
                            <li><a href="/main">Main Pages</a></li>
                            <li><a href="/work">How It Work</a></li>
                            <li><a href="user">User</a></li>
                            <li><a href="freelancer">Freelancer Packages</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="group-btn">
                    <button className="register">REGISTER</button>
                    <button className="sign">SIGN IN</button>
                </div>
            </div>
        </header>
    );
};

export default Header;