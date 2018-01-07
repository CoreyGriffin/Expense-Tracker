import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify!</h1>
    <ul style={{display: 'flex', width: '50%', justifyContent: 'space-between'}}>
      <li><NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/add">Add Expense</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/edit">Edit</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/help">Help</NavLink></li>
    </ul>
  </header>
)

export default Header;