import React from 'react';
import appOxygenLogo from "../../../assets/images/todo-oxygen.png";

import '../../../assets/css/header.css';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-item" href="/">
                <img src={ appOxygenLogo } alt="ninjatalent-logo-img" width="112" height="28" />
            </a>
        </nav>
    )
}

export default Header;