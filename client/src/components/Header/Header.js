import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/livechat-logo.png'

const Header = () => {
  return (
    <div className="navigation-container">
      <img src={logo} className="logo" alt="livechat-logo"/>
      <ul>
        <li><Link to="/" className="link">Join</Link></li>
        <li><Link to="/chat" className="link">Chat</Link></li>
      </ul>
    </div>
  );
}

export default Header;
