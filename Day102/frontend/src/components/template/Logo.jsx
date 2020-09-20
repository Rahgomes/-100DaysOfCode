import React from 'react';
import './Logo.css';
import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" title="logo" />
        </Link>
    </aside>