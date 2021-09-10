import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { FiCodesandbox } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <FiCodesandbox className="icon" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">+</li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
