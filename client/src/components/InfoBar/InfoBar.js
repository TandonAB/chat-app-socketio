import React from 'react';
import './InfoBar.css';
import closeIcon from '../../assets/close-icon.png';
import onlineIcon from '../../assets/close-icon.png';

const InfoBar = ({ room }) => (
  <div className="infobar">
    <div className="leftInnerContainer">
      <div className="online"></div>
      <h3>{room}</h3>
    </div>

    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} className="closeIcon" alt="close-icon" />
      </a>
    </div>
  </div>
)

export default InfoBar;