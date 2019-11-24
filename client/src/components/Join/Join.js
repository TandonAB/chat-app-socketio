import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import '../Styles.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <>
      <Header />
      <div className="outerContainer">
          <div className="joinInnerContainer">
            <h1>Join Chat</h1>
            <div><input type="text" placeholder="Name" className="joinInput" onChange={(event) => setName(event.target.value)} /></div>
            <div><input type="text" placeholder="Room" className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} /></div>
            <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null}>
              <button className={`button ${(!name || !room) ? 'disabled' : 'enabled'}`} type="submit" disabled={!name || !room}>Sign In</button>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Join
