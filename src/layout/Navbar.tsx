import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Store } from '../store/userReducer';

const Navbar = (): JSX.Element => {
  const { state } = useContext(Store);
  return (
    <header className="header">
      <div>
        <h1 className="title">
          <i className="fab fa-github"></i>
          Follow && Githuber
        </h1>
      </div>
      <ul className="ul-style">
        <li className="li-style">
          <NavLink to="/" className="App-link">
            Home
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink to="/followed" className="App-link">
            Followed: {state.follows.length}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
