import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
