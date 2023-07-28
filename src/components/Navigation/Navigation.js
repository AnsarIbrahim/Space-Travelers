import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

export default function Navigation() {
  return (
    <nav>
      <img src={planet} alt="" />
      <h3>Space Travelers&apos; Hub</h3>
      <li className="links">
        <NavLink
          to="/"
          className="link"
        >
          <span className="my-link">Rockets</span>
        </NavLink>
      </li>
      <NavLink to="/missions">
        <span className="my-link">Missions</span>
        {' '}
      </NavLink>
      <span className="ver-line" />
      <NavLink to="/myprofile"><span className="my-link">My Profile</span></NavLink>

    </nav>
  );
}
