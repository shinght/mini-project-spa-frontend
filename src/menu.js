import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return ( 
    <div>
        <h1>Menu component</h1>
        <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/friends">Friends</Link> &nbsp;&nbsp;
        <Link to="/help">Help</Link>
    </div> );
}

export default Menu;