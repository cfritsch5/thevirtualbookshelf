import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, logout}) => (
    <header>
      <Link to="/" className="header-link">
        <div className="header-title">
          <h1>Virtual Book Shelf</h1>
        </div>
      </Link>
      <button onClick={()=>logout(currentUser)}>logout</button>
    </header>
);

export default Header;
