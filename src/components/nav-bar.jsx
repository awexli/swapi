import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='people'>
          <li>People</li>
        </Link>
        <Link to='/planets'>
          <li>Planets</li>
        </Link>
      </ul>
    </div>
  )
}